
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags.service';
import { ApiResponse } from 'src/app/models/response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tag-new',
  templateUrl: './tag-new.component.html',
  styleUrls: ['./tag-new.component.sass']
})
export class TagNewComponent {

  modalOpen: boolean = false;
  tag: Tag = {
    name: '',
    color: "#50D0D0"
  };

  @Output() newTag = new EventEmitter<Tag>();

  constructor(
    private tagService: TagsService,
    private toast: ToastrService,
  ) { }

  submitTag() {
    if (this.tag.name !== '') {
      this.tagService.submitTag(this.tag).subscribe((payload: ApiResponse<Tag>) => {
        this.newTag.emit(payload.data);
        this.modalOpen = false;
        this.toast.success("Oznaka dodana");
      });
    } else {
      this.toast.error("Neveljavni podatki");
    }
  }

  colorChange(color): void {
    this.tag.color = color;
  }

}
