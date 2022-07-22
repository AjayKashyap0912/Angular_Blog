import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageblogComponent } from './manageblog.component';

describe('ManageblogComponent', () => {
  let component: ManageblogComponent;
  let fixture: ComponentFixture<ManageblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
