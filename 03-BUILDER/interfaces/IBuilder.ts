import { Sanduiche } from "../classes/Sanduiche";
import { Sauce } from "../classes/Sauce";
import { BreadType } from "../enums/BreadType";
import { ProteinType } from "../enums/ProteinType";
import { SanduicheType } from "../enums/SanduicheType";

export interface IBuilder {
  reset(): void;
  getSanduiche(): Sanduiche;
  setSanduicheType(sanduicheType: SanduicheType): void;
  setBread(bread: BreadType): void;
  setProtein(protein: ProteinType): void;
  setSalad(salad: boolean): void;
  addSauces(sauce: Sauce): void;
}
