import { Tag } from './../../../models/tag';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';
import { ApiResponse } from 'src/app/models/response';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.sass']
})
export class TagsListComponent implements OnChanges {

  @Input() tags: Tag[];
  @Input() deletable: boolean = false;
  @Input() postWhenClick: boolean = false;

  @Output() deletedTag = new EventEmitter<Tag>();
  @Output() clickPost = new EventEmitter<Tag>();

  constructor() { }

  ngOnChanges() {
  }

  handleClick(tag: Tag): void {
    this.clickPost.emit(tag);
  }

  removeTag(tagToDel: Tag): void {
    this.deletedTag.emit(tagToDel);
  }
}
