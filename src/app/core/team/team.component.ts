import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  public users = [
    { firstName: 'Lukas', lastName: 'Tschannen', function: 'Elektrotechnik', linkdin: '' },
    { firstName: 'Benjamin', lastName: 'Winkler', function: 'Elektrotechnik', linkdin: '' },
    { firstName: 'Alexander', lastName: 'Gertsch', function: 'Elektrotechnik', linkdin: 'https://www.linkedin.com/in/alexander-gertsch-ba39a2ba/' },
    { firstName: 'Yannic', lastName: 'Ziegler', function: 'Informatik', linkdin: 'https://www.linkedin.com/in/yannicziegler/' },
    { firstName: 'Jakob', lastName: 'Ferber', function: 'Informatik', linkdin: 'https://www.linkedin.com/in/jakob-ferber-250389278/' },
    { firstName: 'Michel', lastName: 'Kobel', function: 'Maschinenbau', linkdin: '' },
    { firstName: 'Sven', lastName: 'Rutschi', function: 'Maschinenbau', linkdin: 'https://www.linkedin.com/in/sven-rutschi-b118bb242/' },
    { firstName: 'Pascal', lastName: 'Müller', function: 'Maschinenbau', linkdin: '' },
    { firstName: 'Pascal', lastName: 'Leimer', function: 'Unternehmensprozesse', linkdin: 'https://www.linkedin.com/search/results/all/?keywords=pascal%20leimer&origin=GLOBAL_SEARCH_HEADER&sid=y%3AW'}
];
}
