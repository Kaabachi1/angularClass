import { Component, input } from '@angular/core';
import { Conference } from '../conference.model';

@Component({
  selector: 'app-details-conf',
  imports: [],
  templateUrl: './details-conf.html',
  styleUrl: './details-conf.css',
})
export class DetailsConf {
  conf = input.required<Conference>();
}
