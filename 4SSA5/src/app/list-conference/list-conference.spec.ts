import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConference } from './list-conference';

describe('ListConference', () => {
  let component: ListConference;
  let fixture: ComponentFixture<ListConference>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListConference],
    }).compileComponents();

    fixture = TestBed.createComponent(ListConference);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates the details when a conference is selected', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');

    buttons[1].click();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Conference 2');
    expect(fixture.nativeElement.textContent).toContain('Los Angeles');
  });
});
