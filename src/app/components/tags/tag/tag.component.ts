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

  @Output() delted = new EventEmitter<boolean>();

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
    }, err => {
      this.toastr.error('Prišlo je do napake pri brisanju');
    });
    this.deletePromptModalOpen = false;
  }

}
