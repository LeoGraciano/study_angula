import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './services/people.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { InsertPeopleComponent } from './components/insert-people/insert-people.component';
import { UpdatePeopleComponent } from './components/update-people/update-people.component';

import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { SharedModule } from '../shared';
import { ModalPeopleComponent } from './modal-people/modal-people.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    ListPeopleComponent,
    InsertPeopleComponent,
    UpdatePeopleComponent,
    ModalPeopleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    PeopleService,
    provideEnvironmentNgxMask(),
  ]
})
export class PeopleModule { }
