import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExampleFormComponent } from './dialog-example-form.component';

describe('DialogExampleFormComponent', () => {
  let component: DialogExampleFormComponent;
  let fixture: ComponentFixture<DialogExampleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExampleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogExampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
