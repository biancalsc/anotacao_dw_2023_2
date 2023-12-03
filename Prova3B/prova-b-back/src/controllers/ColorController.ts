/* 5 -
Esse trecho é um pouco mais complexo porém de extrema importancia, aqui você entende
o que pode ser feito com cada tabela (nesse caso apenas 1 tabela né), tente interpretar os códigos
para entender o que cada função da classe pode fazer, se estiver com dúvida peça ajuda ao ChatGPT
ou ao Bard, eles são ótimos nisso, mas a principal função daqui é criar funções, como o nome sugere maneiras
de você controlar o banco de dados

Tem algumas explicações aqui também, quando for capaz de compreende-las siga para o próximo passo em:
../routes/index.ts
*/

import { Request, Response } from "express";
/*
Isso é o que define que uma função precisa de alguma propriedade e também se há uma resposta da função
*/
import AppDataSource from "../data-source";
import { Color } from "../entities/Color";

// Controlador para manipular as operações relacionadas às cores
class ColorController {
  // Método para resetar a tabela de cores
  async reset(_: Request, res: Response) {
    // Limpa a tabela de cores
    const { affected } = await AppDataSource.manager.delete(Color, {});

    // Gera e insere novos 4 registros de cores aleatórias na tabela
    let r: number,
      g: number,
      b: number,
      background: string,
      color: string,
      colors = [];
    for (let i = 0; i < 4; i++) {
      r = Math.floor(Math.random() * 52) * 5;
      g = Math.floor(Math.random() * 52) * 5;
      b = Math.floor(Math.random() * 52) * 5;
      background = rgbHexadecimal(r, g, b);
      color = inverseColor(r, g, b);
      colors.push(
        await AppDataSource.manager.save(Color, { background, color })
      );
    }

    // Retorna as cores inseridas como resposta
    res.json(colors);
  }

  // Método para atualizar um registro de cor usando o ID
  async update(req: Request, res: Response) {
    const { idcolor } = req.params;

    try {
      const id = parseInt(idcolor);

      // Obtém o registro da tabela com base no ID
      const register = await AppDataSource.manager.findOneBy(Color, { id });

      if (register) {
        // Incrementa a contagem e salva o registro de volta na tabela
        register.count++;
        await AppDataSource.manager.save(Color, register);
        res.send(register);
      } else {
        // Retorna mensagem se o registro não foi encontrado
        res.json({ message: "Registro desconhecido" });
      }
    } catch (e: any) {
      // Retorna mensagem de erro, caso ocorra uma exceção
      res.json({ message: e.message });
    }
  }

  // Método para listar todas as cores na tabela
  async list(_: Request, res: Response): Promise<Response> {
    const response = await AppDataSource.manager.find(Color);
    return res.json(response);
  }
}

// Função para converter valores RGB em formato hexadecimal
function rgbHexadecimal(red: number, green: number, blue: number) {
  const r =
    red.toString(16).length < 2 ? "0" + red.toString(16) : red.toString(16);
  const g =
    green.toString(16).length < 2
      ? "0" + green.toString(16)
      : green.toString(16);
  const b =
    blue.toString(16).length < 2 ? "0" + blue.toString(16) : blue.toString(16);
  return `#${r}${g}${b}`;
}

// Função para calcular a cor inversa (complementar) de uma cor RGB
function inverseColor(red: number, green: number, blue: number) {
  const rinverse = 255 - red,
    ginverse = 255 - green,
    binverse = 255 - blue;
  const r =
    rinverse.toString(16).length < 2
      ? "0" + rinverse.toString(16)
      : rinverse.toString(16);
  const g =
    ginverse.toString(16).length < 2
      ? "0" + ginverse.toString(16)
      : ginverse.toString(16);
  const b =
    binverse.toString(16).length < 2
      ? "0" + binverse.toString(16)
      : binverse.toString(16);
  return `#${r}${g}${b}`;
}

// Exporta uma instância do controlador de cores para ser utilizada em outros módulos
export default new ColorController();
