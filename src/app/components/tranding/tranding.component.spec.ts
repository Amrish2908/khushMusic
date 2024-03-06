import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandingComponent } from './tranding.component';

describe('TrandingComponent', () => {
  let component: TrandingComponent;
  let fixture: ComponentFixture<TrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
