import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWithJsonfileComponent } from './todo-with-jsonfile.component';

describe('TodoWithJsonfileComponent', () => {
  let component: TodoWithJsonfileComponent;
  let fixture: ComponentFixture<TodoWithJsonfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWithJsonfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoWithJsonfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
