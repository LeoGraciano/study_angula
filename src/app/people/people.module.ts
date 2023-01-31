import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './services/people.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { InsertPeopleComponent } from './components/insert-people/insert-people.component';
import { UpdatePeopleComponent } from './components/update-people/update-people.component';
import { NumericDirective } from '../shared/directives/numeric.directive';


@NgModule({
  declarations: [
    ListPeopleComponent,
    InsertPeopleComponent,
    UpdatePeopleComponent,
    NumericDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }
