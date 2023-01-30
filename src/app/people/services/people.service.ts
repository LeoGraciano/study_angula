import { Injectable } from '@angular/core';
import { People } from '../../shared/models/people.model'

const LS_CHAVE: string = 'peoples'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor() { }

  listAll(): People[] {
    const peoples = localStorage[LS_CHAVE];
    return peoples ? JSON.parse(peoples) : [];
  }

  insert(people: People): void {
    const peoples = this.listAll()
    people.id = new Date().getTime()
    peoples.push(people)
    localStorage[LS_CHAVE] = JSON.stringify(peoples)
  }

  findById(id: number): People | undefined {
    const peoples: People[] = this.listAll();
    return peoples.find(people => people.id === id);
  }

  update(people: People): void {
    const peoples: People[] = this.listAll();
    peoples.forEach(
      (obj, index, objs) => {
        if (people.id === obj.id) {
          objs[index] = people
        };
      }
    );
    localStorage[LS_CHAVE] = JSON.stringify(peoples);
  }

  delete(id: number): void {
    let peoples: People[] = this.listAll();

    peoples = peoples.filter(people => people.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(peoples)

  }
}

