import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';
import { ApiResponse } from 'src/app/models/response';

@Component({
  selector: 'app-tags-dashboard',
  templateUrl: './tags-dashboard.component.html',
  styleUrls: ['./tags-dashboard.component.sass']
})
export class TagsDashboardComponent implements OnInit {

  tags: Tag[];

  constructor(
    private tagService: TagsService,
  ) { }

  ngOnInit() {
    this.tagService.getTags().subscribe((payload: ApiResponse<Tag[]>) => {
      this.tags = payload.data;
    });
  }

  removeTag(tagToRemove: Tag): void {
    console.log(this.tags);
    this.tags = this.tags.filter((tag: Tag) => tag.id !== tagToRemove.id);
    console.log(this.tags);
  }
}
