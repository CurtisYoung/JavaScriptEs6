// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {

    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
    
  }
  umPorSegundo();

  /** 1.2 */
  import axios from 'axios';
  async function getUserFromGithub(user) {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
  
      console.log(response.data);
    } catch (err) {
      console.log("Usuário não existe");
    }
  }

  getUserFromGithub('diego3g');
  getUserFromGithub('diego3g124123');
  
    /**  1.3 */

  class Github {
    static async getRepositories(repo) {
        try {
         const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response)
        } catch (error) {
            console.log('Repositório não existe');            
        }
    }
}
   Github.getRepositories('rocketseat/rocketseat.com.br');
   Github.getRepositories('CurtisYoung/Omnistack_app');

   /** 1.4 */

   const buscaUsuario =  async usuario => {
    try{
        const responseBusca = await axios.get(`https://api.github.com/users/${user}`);
        console.log(responseBusca.data);
      }
      catch (error){
        console.warn('Usuário não existe busca');    
      }
  }
  
  buscaUsuario('diego3g');

   