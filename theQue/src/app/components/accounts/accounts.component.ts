import { Component, PipeTransform, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl ,FormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Users {
  user: string;
  flag: string;
  phone: string;
  time: string;
}

const USERS: Users[] = [
  {
    user: 'John Smith',
    flag: 'Assigned',
    phone: '(212) 726-3589',
    time: '6:25'
  },
  {
    user: 'Anna Jhonson',
    flag: 'Not Assigned',
    phone: '(212) 726-3589',
    time: '6:30'
  }
];

function search(text: string, pipe: PipeTransform): Users[] {
  return USERS.filter(USERS => {
    const term = text.toLowerCase();
    return USERS.user.toLowerCase().includes(term)
        || pipe.transform(USERS.phone).includes(term)
        || pipe.transform(USERS.time).includes(term);
  });
}

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  providers: [DecimalPipe]
})
export class AccountsComponent implements OnInit {

  USER$: Observable<Users[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.USER$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  ngOnInit(): void {
  }

}
