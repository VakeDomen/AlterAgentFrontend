import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';
import { Tag } from 'src/app/models/tag';
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

  constructor() { }

  ngOnChanges() {
  }

}
