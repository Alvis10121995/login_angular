import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noencontrado404Component } from './noencontrado404.component';

describe('Noencontrado404Component', () => {
  let component: Noencontrado404Component;
  let fixture: ComponentFixture<Noencontrado404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noencontrado404Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Noencontrado404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
