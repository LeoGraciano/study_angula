import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { People } from 'src/app/shared/models/people.model';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-people',
  templateUrl: './update-people.component.html',
  styleUrls: ['./update-people.component.sass']
})
export class UpdatePeopleComponent implements OnInit {
  @ViewChild("formPeople") formPeople!: NgForm
  people!: People;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params['id'];

    const res = this.peopleService.findById(id);
    if (res !== undefined) {
      this.people = res;
    } else {
      throw new Error("Pessoa não foi encontra com id= " + id)
    };
  };

  update(): void {
    if (this.formPeople.form.valid) {
      this.peopleService.update(this.people)
      this.router.navigate(['/pessoas'])
    };
  };

}
