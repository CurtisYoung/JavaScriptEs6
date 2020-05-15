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

   const age = usuarios.map(ages => (
     ages.idade
   ));

   /** 2.2 filter */
   const rocketUsers = usuarios.filter(users =>(users.idade > 18 && users.empresa === 'Rocketseat'));

   /**2.3 find */
   const googleUsers = usuarios.find(user => ( user.empresa === 'Google'));

   /**2.4 map + filter */

   const futureUsers = usuarios.map (users => ({...users,idade: users.idade * 2}) )

   const less50Users = futureUsers.filter(users =>(users.idade < 51));
   console.log(less50Users);
   

/** FIM Exercício 2*/

/**Exercício 3 */

// 3.1
const arr = [1, 2, 3, 4, 5];
const sumForTen = arr.map(item => ( item + 10));

// 3.2

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => (usuario.idade);
  

console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => (
   nome, idade 
)
mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = ()=> new Promise((resolve, reject)=>resolve("Array Function"));
   
//promise().then(response => (console.log(response)));


/** FIM Exercício 3*/


/**Exercício 4 */

/** 4.1 */
const empresa = {
    nomeEmpresa: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

const {nomeEmpresa, endereco:{cidade,estado}} = empresa;

console.log(nomeEmpresa); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


/** 4.2 */
function mostraInfo({nome,idade}) {
    return console.log(`${nome} tem ${idade} anos.`);
   }
mostraInfo({ nome: 'Diego', idade: 23 })

/** FIM Exercício 4*/

/**Exercício 5 */

/** 5.1 */
const newArr = [1, 2, 3, 4, 5, 6];

const [x , ...y] = newArr;


// function soma...

const soma = (...params) => (
    params.reduce((total, next) => total+next )
);

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


/** 5.2 */
const spreadUsuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };
 
const spreadUsuario2 = {...spreadUsuario, nome:'Gabriel'};

const spreadUsuario3 = {...spreadUsuario, endereco:{cidade:'Lontras'}}

console.log(spreadUsuario3);

/**FIM Exercício 5 */

/** Exercício 6 */
const usuarioLts = 'Diego';
const idadeLts = 23;
console.log(`O usuário ${usuarioLts} possui ${idadeLts} anos`);

/**FIM Exercício 6 */

/** Exercício 7 */
const nomeOss = 'Curtis';
const idadeOss = 29;

const usuarioOss = {
 nomeOss,
 idadeOss,
 cidade: 'Rio do Sul',
};

console.log(usuarioOss);

/** FIM Exercício 7 */