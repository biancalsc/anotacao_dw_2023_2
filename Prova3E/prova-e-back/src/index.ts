import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}...`));

app.get("/:a/:b/:operation", async (req: Request, res: Response) => {
  // aguarda 2 segundos
  await sleep(2000);
  try {
    const { a, b, operation } = req.params;
    let x = parseFloat(a),
      y = parseFloat(b);
    let r: number, op:string;
    switch (operation) {
      case "add":
        r = x + y;
        op = "+";
        break;
      case "diff":
        r = x - y;
        op = "-";
        break;
      case "mult":
        r = x * y;
        op = "*";
        break;
      case "divide":
        r = x / y;
        op = "/";
        break;
      case "pow":
        r = x ** y;
        op = "**";
        break;
      default:
        r = NaN;
    }
    res.json({ response: `${x} ${op} ${y} = ${r}` });
  } catch (e: any) {
    res.json({ response: e.message });
  }
});

//aceita qualquer método HTTP ou URL
app.use((_: Request, res: Response) =>
  res.json({ message: "Requisição desconhecida" })
);

function sleep(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
