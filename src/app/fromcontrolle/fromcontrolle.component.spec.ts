import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromcontrolleComponent } from './fromcontrolle.component';

describe('FromcontrolleComponent', () => {
  let component: FromcontrolleComponent;
  let fixture: ComponentFixture<FromcontrolleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromcontrolleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromcontrolleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
