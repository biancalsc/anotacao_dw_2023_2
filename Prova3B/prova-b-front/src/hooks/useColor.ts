/* 15 -
  A única função desse trecho é mais organização e um aviso pra caso você esqueça de usar
  algum wrapper, Mas basicamente sempre que você for usar alguma coisa de color você vai
  importar daqui e ele vai te retornar o contexto

  Daqui siga para ./index.ts
*/

import { useContext } from "react";
import { ColorContext, ColorProvider } from "../contexts/index";

const useColor = () => {
  const context = useContext(ColorContext);

  if (!context) {
    throw new Error("useColor deve ser usado dentro de um ColorProvider");
  }

  return context;
};

export { useColor, ColorProvider}