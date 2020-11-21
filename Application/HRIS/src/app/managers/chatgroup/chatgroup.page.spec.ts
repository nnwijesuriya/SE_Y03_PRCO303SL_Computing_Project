import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatgroupPage } from './chatgroup.page';

describe('ChatgroupPage', () => {
  let component: ChatgroupPage;
  let fixture: ComponentFixture<ChatgroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatgroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatgroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
