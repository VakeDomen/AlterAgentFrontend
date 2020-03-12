import { ApiResponse } from './../../../models/response';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from './../../../services/client.service';
import { Client } from './../../../models/client';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.sass']
})
export class ClientNewComponent implements OnInit {

  client: Client = new Client();
  modalOpen: boolean = false;
  @Output() newClient = new EventEmitter<Client>();


  constructor(
    private clientService: ClientService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  submitClient(): void {
    this.clientService.submitClient(this.client).subscribe((payload: ApiResponse<Client>) => {
      this.newClient.emit(this.client);
      this.toastr.success("Stranka vnešena");
    }, err => {
      this.toastr.error("Napaka pri vnašanju stranke");
    });
  }

}
