import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './services/people.service';
import { ListPeopleComponent } from './list-people/list-people.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InsertPeopleComponent } from './insert-people/insert-people.component';
import { UpdatePeopleComponent } from './update-people/update-people.component';


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
