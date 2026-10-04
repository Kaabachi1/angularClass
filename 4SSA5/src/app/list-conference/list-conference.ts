import { Component, signal } from '@angular/core';
import { DetailsConf } from '../details-conf/details-conf';
import { Conference } from '../conference.model';

@Component({
  selector: 'app-list-conference',
  imports: [DetailsConf],
  templateUrl: './list-conference.html',
  styleUrl: './list-conference.css',
})
export class ListConference {
  conferences: Conference[] = [
    {
      name: 'Conference 1',
      date: '2023-06-01',
      location: 'New York',
    },
    {
      name: 'Conference 2',
      date: '2023-07-15',
      location: 'Los Angeles',
    },
    {
      name: 'Conference 3',
      date: '2023-08-20',
      location: 'Chicago',
    },
  ];

  selectedConference = signal(this.conferences[0]);

  selectConference(conference: Conference): void {
    this.selectedConference.set(conference);
  }
}
