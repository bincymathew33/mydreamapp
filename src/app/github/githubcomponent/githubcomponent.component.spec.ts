import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubcomponentComponent } from './githubcomponent.component';

describe('GithubcomponentComponent', () => {
  let component: GithubcomponentComponent;
  let fixture: ComponentFixture<GithubcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
