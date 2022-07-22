import { Sanduiche } from "../classes/Sanduiche";
import { Sauce } from "../classes/Sauce";
import { BreadType } from "../enums/BreadType";
import { ProteinType } from "../enums/ProteinType";
import { SanduicheType } from "../enums/SanduicheType";
import { IBuilder } from "../interfaces/IBuilder";

export class SanduicheBuilder implements IBuilder {
  private _sanduiche = new Sanduiche();

  reset(): void {
    this._sanduiche = new Sanduiche();
  }
  getSanduiche(): Sanduiche {
    return this._sanduiche;
  }
  setSanduicheType(sanduicheType: SanduicheType): void {
    this._sanduiche._sanduicheType = sanduicheType;
  }
  setBread(bread: BreadType): void {
    this._sanduiche._bread = bread;
  }

  setProtein(protein: ProteinType): void {
    this._sanduiche._protein = protein;
  }

  setSalad(salad: boolean): void {
    this._sanduiche._salad = salad;
  }
  addSauces(sauce: Sauce): void {
    this._sanduiche._sauces.push(sauce);
  }
}
