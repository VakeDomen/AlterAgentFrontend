import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';
import { ApiResponse } from 'src/app/models/response';

@Component({
  selector: 'app-tags-dashobard',
  templateUrl: './tags-dashobard.component.html',
  styleUrls: ['./tags-dashobard.component.sass']
})
export class TagsDashobardComponent implements OnInit {

  tags: Tag[];

  constructor(
    private tagService: TagsService,
  ) { }

  ngOnInit() {
    this.tagService.getTags().subscribe((payload: ApiResponse<Tag[]>) => {
      this.tags = payload.data;
    });
  }

  newTag(tag: Tag): void {
    this.tags.push(tag);
  }
}
