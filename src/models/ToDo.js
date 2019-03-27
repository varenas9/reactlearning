import {db} from '../lib/firebase';
import uuid from 'uuid/v4';

class ToDo {
  constructor(list, id) {
    this.name = list.name;
    this.toDos = list.toDos || [];
    this._ref = db.ref(`lists/${id}`);
  }

  addItem(value) {
    this.toDos.push({
      value:value,
      status:false
    })
    this._ref.set({
      name: this.name,
      toDos: [...this.toDos]
    })
  }
  
  static createList(name){
    const id = uuid();
    db.ref(`lists/${id}`).set({
      name,
      toDos: []
    })
  }

  static subscribe(callback){
    const ref = db.ref('lists');
    ref.on('value', (snapshot) => {
      const lists = snapshot.val()
      const results = Object.keys(lists || {}).map((id) => {
        return new ToDo(lists[id], id);
      });
      
      callback(results);
    });
    return () => ref.off();
  }
}

export default ToDo;