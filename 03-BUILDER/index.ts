import { SanduicheBuilder } from "./builders/SanduicheBuilder";
import { Director } from "./directors/Director";

const builder = new SanduicheBuilder();
const director = new Director(builder);

director.constructHotDog();

const hotDog = builder.getSanduiche();

builder.reset();
director.constructXSalada();

const xSalada = builder.getSanduiche();

console.log(`Tipo: ${hotDog._sanduicheType}`);
console.log(`Proteina: ${hotDog._protein}`);
console.log(`Tem salada: ${hotDog._salad}`);
console.log(`Tipo pão: ${hotDog._bread}`);
console.log("Molhos:");
hotDog._sauces.map((sauce) => console.log(sauce.molho));

console.log("----------------------------");

console.log(`Tipo: ${xSalada._sanduicheType}`);
console.log(`Proteina: ${xSalada._protein}`);
console.log(`Tem salada: ${xSalada._salad}`);
console.log(`Tipo pão: ${xSalada._bread}`);
console.log("Molhos:");
xSalada._sauces.map((sauce) => console.log(sauce.molho));
