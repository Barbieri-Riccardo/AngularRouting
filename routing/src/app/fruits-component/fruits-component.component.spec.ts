import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitsComponentComponent } from './fruits-component.component';

describe('FruitsComponentComponent', () => {
  let component: FruitsComponentComponent;
  let fixture: ComponentFixture<FruitsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
