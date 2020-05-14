class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
       // console.log(this.data);
    }
}

class TodoList extends List{

}


const MinhaLista = new TodoList();

document.querySelector('#novotodo').onclick = () => {
    MinhaLista.add('Novo todo');
}

/** Exercício 1 */

class Usuario{
    constructor(email,senha){
        this.email=email;
        this.senha=senha;
    }

    isAdmin(){    
      return this.admin ===true;
    }

}
class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;        
    }
}
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) 
/** Fim exercício 1 */

/**Exercício 2 */

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   /**2.1 map */

   const age = usuarios.map(ages => {
    return ages.idade;
   });

   /** 2.2 filter */
   const rocketUsers = usuarios.filter(users =>{ return users.idade > 18 && users.empresa === 'Rocketseat'});

   /**2.3 find */
   const googleUsers = usuarios.find(user => { return user.empresa === 'Google'});

   /**2.4 map + filter */

   const futureUsers = usuarios.map (users => ({...users,idade: users.idade * 2}) )

   const less50Users = futureUsers.filter(users =>{
       return users.idade < 51;
   })

   console.log(less50Users);
   

/** FIM Exercício 2*/