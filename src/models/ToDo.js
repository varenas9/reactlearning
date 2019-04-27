import {db} from '../lib/firebase';
import uuid from 'uuid/v4';

class ToDo {
  constructor(list, id) {
    this.name = list.name;
    this.toDos = list.toDos || [];
    this._ref = db.ref(`lists/${id}`);
    this.favorite = list.favorite || false;
  }

  addItem(value) {
    this.toDos.push({
      value:value,
      status:false
    })
    this._ref.set({
      name: this.name,
      toDos: [...this.toDos],
      favorite: this.favorite
    })
  }

  changeItem(idx) {
    this.toDos[idx].status = !this.toDos[idx].status;
    this._ref.set({
      name: this.name,
      toDos: [...this.toDos],
      favorite:this.favorite
    })
  }
  deleteItem(idx) {
    this.toDos.splice(idx, 1);

    this._ref.set({
      name: this.name,
      toDos: [...this.toDos],
      favorite: this.favorite
    })
  }
  removeList(){
    this._ref.remove()
  }
  editItem(idx, toDo){
    this.toDos[idx].value= toDo;
    this._ref.set({
      name: this.name,
      toDos: [...this.toDos],
      favorite:this.favorite
    })
  }
  emptyList(){
    this._ref.set({
      name:this.name,
      toDos: []
    })
  }
  cloneList(){
    const id = uuid();
    db.ref(`lists/${id}`).set({
      name:this.name,
      toDos:this.toDos,
      favorite: this.favorite
    })
  }
  favoriteList(){
    this._ref.set({
      name: this.name,
      toDos: this.toDos,
      favorite: !this.favorite
    })
  }
  changeTitle(title){
    this._ref.set({
      name: title,
      toDos: this.toDos,
      favorite: this.favorite
    });
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