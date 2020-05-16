import * as exercise01 from './exercise01';
import ClasseUsuario, {idade as IdadeUsuario} from './functions';




ClasseUsuario.info();
console.log(IdadeUsuario);
class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{

}


const MinhaLista = new TodoList();

document.querySelector('#novotodo').onclick = () => {
    MinhaLista.add('Novo todo');
}

