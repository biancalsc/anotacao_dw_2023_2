/* 10 -
Aqui é onde você vai definir as propriedades do que você está
trabalhando com, nesse caso a tabela Colors onde eu defini tudo que possui dentro dela
na interface ColorProps, usando como base os conteúdos apresentados em:
./Prova-B-Back/src/entities/Color.ts
E uma nova interface com o nome Props que possui uma função chamada handleClique e colors que faz
um array com todos os conteúdos que fazem uso de ColorProps, semelhante uma lista

Daqui, vá para ../service/colorService.ts
*/

export interface Props {
    colors: ColorProps[];
    handleClique: (id: number) => Promise<void>;
}

export interface ColorProps {
  id: number;
  background: string;
  color: string;
  count: number;
}
