import { ApiResponse } from './../../../models/response';
import { Client } from './../../../models/client';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.sass']
})
export class ClientEditComponent implements OnInit {

  @Input() client: Client;
  modalOpen: boolean = false;
  @Output() clientEdit = new EventEmitter<Client>();

  constructor(
    private clientService: ClientService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  submitClient(): void {
    this.clientService.updateClient(this.client).subscribe((payload: ApiResponse<Client>) => {
      this.clientEdit.emit(this.client);
      this.toastr.success("Stranka posodobljena");
      this.modalOpen = false;
    }, err => {
      this.toastr.error("Napaka pri posodabljanju stranke");
    });
  }
}
