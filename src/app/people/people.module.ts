import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './services/people.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { InsertPeopleComponent } from './components/insert-people/insert-people.component';
import { UpdatePeopleComponent } from './components/update-people/update-people.component';


@NgModule({
  declarations: [
    ListPeopleComponent,
    InsertPeopleComponent,
    UpdatePeopleComponent
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
