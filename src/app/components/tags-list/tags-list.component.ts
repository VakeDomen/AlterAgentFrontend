import { Component, OnInit, Input } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';
import { Tag } from 'src/app/models/tag';
import { ApiResponse } from 'src/app/models/response';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.sass']
})
export class TagsListComponent implements OnInit {

  @Input() tags: Tag[];

  constructor(
    private tagsService: TagsService,
  ) { }

  ngOnInit() {
    if (!this.tags) {
      this.tagsService.getTags().subscribe((payload: ApiResponse<Tag[]>) => {
        this.tags = payload.data;
      });
    }
  }
}
