import { Component, OnInit } from '@angular/core';

import { People } from 'src/app/shared/models/people.model';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.sass']
})
export class ListPeopleComponent implements OnInit {
  peoples: People[] = [];

  constructor(private peopleService: PeopleService) { };


  ngOnInit(): void {
    this.peoples = this.listAll();
  }

  listAll(): People[] {
    return this.peopleService.listAll();
  }

  remover($event: any, people: People): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remove a pessoa ${people.name}`)) {
      this.peopleService.delete(people.id!);
      this.peoples = this.listAll();
    };
  };

}
