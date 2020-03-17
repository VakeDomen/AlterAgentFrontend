import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';
import { ApiResponse } from 'src/app/models/response';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-tags-dashboard',
  templateUrl: './tags-dashboard.component.html',
  styleUrls: ['./tags-dashboard.component.sass']
})
export class TagsDashboardComponent implements OnInit {

  tags: Tag[];

  filterTags: string[]
  filteredTags: string[];
  clients: Client[][] = [];

  constructor(
    private tagService: TagsService,
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    this.tagService.getTags().subscribe((payload: ApiResponse<Tag[]>) => {
      this.tags = payload.data;
      this.filterTags = this.generateFilterTags();
    });
  }

  removeTag(tagToRemove: Tag): void {
    this.tags = this.tags.filter((tag: Tag) => tag.id !== tagToRemove.id);
  }

  findTagId(tagName: string): string {
    for (const tag of this.tags) {
      if (tag.name === tagName) {
        return tag.id;
      }
    }
  }

  generateFilterTags(): string[] {
    const filters: string[] = [];
    for (const tag of this.tags) {
      filters.push(tag.name);
    }
    return filters;
  }

  addClients(tag: string): void {
    this.clientService.getClientsByTag(this.findTagId(tag)).subscribe((payload: ApiResponse<Client[]>) => {
      this.clients[tag] = [...payload.data];
    })
  }

  removeClients(tag: any): void {
    this.clients[tag.label] = [];
  }

  clearClients(): void {
    this.clients = [];
  }

  getClients(): Client[] {
    let clients: Client[] = [];
    for (const clientIndex in this.clients) {
      clients = [...clients, ...this.clients[clientIndex]];
    }
    return this.getUnique(clients);
  }

  getUnique(arr: Client[]): Client[] {
    const unique = arr
      .map(e => e['id'])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e]);
     return unique;
  }
}
