import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { ToastrService } from 'ngx-toastr';
import { TagsService } from 'src/app/services/tags.service';
import { ApiResponse } from 'src/app/models/response';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.sass']
})
export class TagComponent implements OnInit {

  @Input() tag: Tag;
  @Input() deletable: boolean = false;
  @Input() postWhenClick: boolean = false;

  @Output() deleted = new EventEmitter<Tag>();
  @Output() clickPost = new EventEmitter<Tag>();

  deletePromptModalOpen: boolean = false;

  constructor(
    private tagsService: TagsService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  deleteTag(): void {
    this.tagsService.deleteTag(this.tag.id).subscribe((payload: ApiResponse<any>) => {
      this.toastr.success('Izbrisano');
      this.deleted.emit(this.tag);
      this.deletePromptModalOpen = false;
    }, err => {
      this.toastr.error('Prišlo je do napake pri brisanju');
    });
  }

  handleClick(): void {
    if (this.postWhenClick) {
      this.clickPost.emit(this.tag);
    }
  }

}
