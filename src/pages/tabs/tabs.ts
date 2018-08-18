import { Component } from '@angular/core';

import { ReadPage } from '../read/read';
import { PersonalPage } from '../personal/personal';
import { HomePage } from '../home/home';
import { MarksPage } from '../marks/marks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  marks = MarksPage;
  read = ReadPage;
  personal = PersonalPage;

  constructor() {

  }
}
