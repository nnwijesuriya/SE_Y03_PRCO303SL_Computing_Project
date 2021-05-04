import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShortListedPage } from './short-listed.page';

describe('ShortListedPage', () => {
  let component: ShortListedPage;
  let fixture: ComponentFixture<ShortListedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortListedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShortListedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
