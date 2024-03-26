import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompmodeladoComponent } from './compmodelado.component';

describe('CompmodeladoComponent', () => {
  let component: CompmodeladoComponent;
  let fixture: ComponentFixture<CompmodeladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompmodeladoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompmodeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
