import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsConf } from './details-conf';
import { Conference } from '../conference.model';

describe('DetailsConf', () => {
  let component: DetailsConf;
  let fixture: ComponentFixture<DetailsConf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsConf],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsConf);
    component = fixture.componentInstance;
    const conference: Conference = {
      name: 'Conference test',
      date: '2023-06-01',
      location: 'Paris',
    };
    fixture.componentRef.setInput('conf', conference);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
