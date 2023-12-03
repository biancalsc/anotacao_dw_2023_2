/* 8 -
Vai ter bastante coisa quando você entrar aqui a primeira vez, limpe todo o código e deixe ele apenas da seguinte forma:

function App() {
  return (
    <div>
    </div>
  );
}

export default App;

Isso vai fazer uma página branca completamente limpa para você, pode apagar os imports inclusive

Essa página basicamente é a tela inícial do seu projeto, ou seja a rota padrão, no caso desse projeto a rota padrão é
http://localhost:3102 mas varia de acordo a porta que você colocar, inclusive, atenção na porta, geralmente em algum lugar
da prova o Professor Arley mostra a porta que deve ser usada, você edita a porta que quer usar em .env simplesmente criando
a variavel PORT = <Valor da porta>

Vamos voltar a esse arquivo depois, a primeira vez que você chegar isso você só vai poder limpar o arquivo mesmo
*/

/* 9 -
Seguindo com o modelo de prova tipo B, com o backend rodando vá para o link http://localhost:3101/list e depois retorne para cá
se ele retornar algo semelhante com isso:
[{"id":173,"background":"#645f19","color":"#9ba0e6","count":0},{"id":174,"background":"#1eafc8","color":"#e15037","count":0},{"id":175,"background":"#be5ad2","color":"#41a52d","count":0},{"id":176,"background":"#be2d37","color":"#41d2c8","count":0}]
Quer dizer que o backend está funcionando corretamente, e ele está fornecendo informações
Essa é uma forma de você ver se um metodo http está fazendo o que é suposto a fazer

Após verificar isso você precisa criar as propriedades, então siga para ./types/index.ts
*/

/* 19 -
E por último, você insere os componentes dentro daquela div que esvaziamos no passo 8, e fazendo isso eles já devem aparecer na tela
Teoricamente funcionando como deveria

Volte ao txt para finalizar
*/

import Colors from "./Components/colors";
import { ColorProvider } from "./hooks/index";

function App() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ColorProvider>
        {/*Obs: Novamente o componente dentro do wrapper*/}
        <Colors />
      </ColorProvider>
    </div>
  );
}

export default App;
