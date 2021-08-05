import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhalistaComponent } from './minhalista.component';

describe('MinhalistaComponent', () => {
  let component: MinhalistaComponent;
  let fixture: ComponentFixture<MinhalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhalistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
