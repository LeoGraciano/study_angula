import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeopleService } from '../../services/people.service';
import { Router } from '@angular/router';

import { People } from 'src/app/shared';
@Component({
  selector: 'app-insert-people',
  templateUrl: './insert-people.component.html',
  styleUrls: ['./insert-people.component.sass']
})
export class InsertPeopleComponent implements OnInit {
  @ViewChild('formPeople') formPeople!: NgForm
  people!: People;

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.people = new People();
  }

  insert(): void {
    if (this.formPeople.form.valid) {
      this.peopleService.insert(this.people);
      this.router.navigate(['/pessoas']);
    };
  }

}
