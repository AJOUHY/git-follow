import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithibComponent } from './githib.component';

describe('GithibComponent', () => {
  let component: GithibComponent;
  let fixture: ComponentFixture<GithibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
