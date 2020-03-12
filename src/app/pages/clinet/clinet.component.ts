import { ApiResponse } from './../../models/response';
import { ToastrService } from 'ngx-toastr';
import { TagsService } from './../../services/tags.service';
import { ClientService } from './../../services/client.service';
import { Client } from './../../models/client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-clinet',
  templateUrl: './clinet.component.html',
  styleUrls: ['./clinet.component.sass']
})
export class ClinetComponent implements OnInit {

  client: Client;
  tags: Tag[];

  constructor(
    private clientService: ClientService,
    private tagService: TagsService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(id).subscribe((payload: ApiResponse<Client[]>) => {
      this.client = payload.data.pop();
    });
    this.tagService.getClientTags(id).subscribe((payload: ApiResponse<Tag[]>) => {
      this.tags = payload.data;
    });
  }

  updateTags(tags: Tag[]): void {
    this.tags = tags;
  }

  editClient(client: Client): void {
    this.client = client;
  }
}
