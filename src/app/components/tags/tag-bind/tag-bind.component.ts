import { ToastrService } from 'ngx-toastr';
import { ApiResponse } from './../../../models/response';
import { TagsService } from './../../../services/tags.service';
import { Client } from './../../../models/client';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-tag-bind',
  templateUrl: './tag-bind.component.html',
  styleUrls: ['./tag-bind.component.sass']
})
export class TagBindComponent implements OnInit {

  @Input() clientId: string;
  @Output() tagUpdate = new EventEmitter<Tag[]>();
  clientTags: Tag[];
  allTags: Tag[];
  modalOpen: boolean = false;

  constructor(
    private tagService: TagsService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    if (this.clientId) {
      this.tagService.getClientTags(this.clientId).subscribe((payload: ApiResponse<Tag[]>) => {
        this.clientTags = payload.data;
      });
      this.tagService.getTags().subscribe((payload: ApiResponse<Tag[]>) => {
        console.log(payload)
        this.allTags = payload.data;
      });
    }
  }

  getAvalibleTags(): Tag[] {
    if (this.allTags) {
      return this.allTags.filter((tag: Tag) => !this.containsTag(this.clientTags, tag));
    }
  }

  containsTag(tagArray: Tag[], tag: Tag): boolean {
    for (const tagel of tagArray) {
      if (tagel.id === tag.id) {
        return true;
      }
    }
    return false;
  }

  addTag(tag: Tag): void {
    console.log("adding tag")
    this.tagService.bindTag(this.clientId, tag.id).subscribe((payload: ApiResponse<Tag>) => {
      this.clientTags.push(tag);
      this.toastr.success('Stranka označena');
      this.tagUpdate.emit(this.clientTags);
    }, err => {
      this.toastr.error('Napaka pri označevanju stranke');
    });
  }

  removeTag(tagToRemove: Tag): void {
    this.tagService.unbindTag(this.clientId, tagToRemove.id).subscribe((payload: ApiResponse<any>) => {
      this.clientTags = this.clientTags.filter((tag: Tag) => tag.id !== tagToRemove.id);
      this.toastr.success('Oznaka odstranjena');
      this.tagUpdate.emit(this.clientTags);
    }, err => {
      this.toastr.error('Napaka pri odtranjevanju oznake stranke');
    });
  }

}
