import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsDashobardComponent } from './tags-dashobard.component';

describe('TagsDashobardComponent', () => {
  let component: TagsDashobardComponent;
  let fixture: ComponentFixture<TagsDashobardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsDashobardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsDashobardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
