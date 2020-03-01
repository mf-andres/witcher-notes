import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonalityComponent } from './tonality.component';

describe('TonalityComponent', () => {
  let component: TonalityComponent;
  let fixture: ComponentFixture<TonalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
