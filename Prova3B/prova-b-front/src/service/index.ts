/* 12 -
    Não sei se você se lembra mas o arley disse que toda pasta sempre tem
    um index.ts mesmo que seja com um objetivo bobo, nesse caso o objetivo
    é simplesmente organizar na hora de se exportar, sempre que você for
    importar qualquer uma das funções de service, importe elas a partir
    desse arquivo e não do colorService ou outro arquivo diretamente

    Daqui siga para ../contexts/Context.tsx
*/

import { getColorList, updateColor, resetColors } from "./colorService";

export { getColorList, updateColor, resetColors };
