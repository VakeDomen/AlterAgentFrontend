import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Client } from 'src/app/models/client';
import { TagsService } from 'src/app/services/tags.service';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/response';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.sass']
})
export class ClientCardComponent implements OnChanges {

  @Input() client: Client;
  tags: Tag[];

  constructor(
    private tagService: TagsService,
    public router: Router,
  ) { }

  ngOnChanges() {
    this.tagService.getClientTags(this.client.id).subscribe((payload: ApiResponse<Tag[]>) => {
      this.tags = payload.data;
    });
  }

  route(id: string): void {
    this.router.navigate(['client', id]);
  }
}
