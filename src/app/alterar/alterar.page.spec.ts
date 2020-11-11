import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlterarPage } from './alterar.page';

describe('AlterarPage', () => {
  let component: AlterarPage;
  let fixture: ComponentFixture<AlterarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlterarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
