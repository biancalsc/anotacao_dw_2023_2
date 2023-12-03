/* 11 -
Aqui é onde você vai definir as informações que são buscadas e o nome das funções que fazem isso,
Resumindo, é aqui que você define que funções fazem o que, como acessa-las, é como se você estivesse
dizendo que tipo se serviços color é capaz de atender
explicações detalhadas e !!!importantes!!! abaixo

Depois que entender tudo siga para ./index.ts
*/

/*
O axios é o que nos usamos para acessar as informações
npm i axios
*/

/*
!!!
Se por algum acaso o axios não instalar, passe o mouse or cima da parte do código que está
sangrando e as vezes vai estar escrito para você executar outro npm i de alguma outra coisa
Faça esse comando
!!!
*/
import axios from "axios";

/*
  Função para obter a lista de cores do backend.
  Utiliza o método GET do axios para fazer uma requisição à rota "/list" do servidor.
  Retorna os dados recebidos da resposta.
  Em caso de erro, registra o erro no console e o lança novamente.
*/
export const getColorList = async () => {
  try {
    const response = await axios.get("http://localhost:3101/list");
    /*
      !!!
        Se lembra do que eu explique no passo 6? repare que está escrito
        axios.*get*, substitua pelo tipo de requisição que está especificada
        na routes do seu backend, seja post, put, delete, etc.
      !!!
    */
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do backend:", error);
    throw error;
  }
};

/*
  Função para atualizar a contagem de uma cor específica no backend.
  Utiliza o método GET do axios para fazer uma requisição à rota "/update/:id" do servidor,
  onde ":id" é o identificador da cor.
*/
export const updateColor = async (id: number) => {
  try {
    await axios.get(`http://localhost:3101/update/${id}`);
  } catch (error) {
    console.error("Erro ao enviar clique para o backend:", error);
    throw error;
  }
};
/*
Uma forma de você testa essa é usar o link e fornecer algum id que possui na tabela,
exemplo que eu utilizei:
http://localhost:3101/update/173
Substitua o número pelo id que tiver no seu banco de dados, a cada vez que você recarregar
a página o valor count deve ser atualizado
*/

/*
  Função para resetar os contadores das cores no backend.
  Utiliza o método GET do axios para fazer uma requisição à rota "/reset" do servidor.
*/
export const resetColors = async () => {
  try {
    await axios.get("http://localhost:3101/reset");
  } catch (error) {
    console.error("Erro ao resetar contadores:", error);
    throw error;
  }
};
/*
Para testar essa basta clicar, observe se background está basta acessar o http
Observe se valores como id estão sendo atualizados sempre que recarregar
*/
