import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { ApiResponse } from 'src/app/models/response';

@Component({
  selector: 'app-clinets',
  templateUrl: './clinets.component.html',
  styleUrls: ['./clinets.component.sass']
})
export class ClinetsComponent implements OnInit {

  clients: Client[];
  allClients: Client[];

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    this.clientService.getClients().subscribe((payload: ApiResponse<Client[]>) => {
      this.clients = payload.data;
      this.allClients = payload.data;
    });
  }

  queryClients(query: string): void {
    if (query === '') {
      this.clients = this.allClients;
    } else {
      this.clientService.getClientsByName(query).subscribe((payload: ApiResponse<Client[]>) => {
        this.clients = payload.data;
        console.log(payload);
      });
    }
  }
}
