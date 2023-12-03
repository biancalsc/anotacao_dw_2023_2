import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Color } from "../entities/Color";

class ColorController {
  async reset(_: Request, res: Response) {
    // limpa a tabela
    const { affected } = await AppDataSource.manager.delete(Color, {});
    // insere 4 registros na tabela
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
    res.json(colors);
  }

  async update(req: Request, res: Response) {
    const { idcolor } = req.params;
    try {
      const id = parseInt(idcolor);
      //obtém o registro na tabela
      const register = await AppDataSource.manager.findOneBy(Color, { id });
      if (register) {
        register.count++;
        await AppDataSource.manager.save(Color, register);
        res.send(register);
      } else {
        res.json({ message: "Registro desconhecido" });
      }
    } catch (e: any) {
      res.json({ message: e.message });
    }
  }

  async list(_: Request, res: Response): Promise<Response> {
    const response = await AppDataSource.manager.find(Color);
    return res.json(response);
  }
}

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

export default new ColorController();
