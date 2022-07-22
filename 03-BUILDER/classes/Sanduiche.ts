import { BreadType } from "../enums/BreadType";
import { ProteinType } from "../enums/ProteinType";
import { SanduicheType } from "../enums/SanduicheType";
import { Sauce } from "./Sauce";

export class Sanduiche {
  _sanduicheType: SanduicheType;
  _sauces: Sauce[] = [];
  _protein: ProteinType;
  _salad: boolean;
  _bread: BreadType;

  get sanduicheType(): SanduicheType {
    return this._sanduicheType;
  }

  set sanduicheType(tipoSanduiche: SanduicheType) {
    this._sanduicheType = tipoSanduiche;
  }

  get salad(): boolean {
    return this.salad;
  }

  set salad(handleSalad: boolean) {
    this._salad = handleSalad;
  }

  get protein(): ProteinType {
    return this._protein;
  }

  set protein(tipoProteina: ProteinType) {
    this._protein = tipoProteina;
  }
  get bread(): BreadType {
    return this._bread;
  }

  set bread(tipoPao: BreadType) {
    this._bread = tipoPao;
  }

  get sauces(): Sauce[] {
    return this._sauces;
  }

  addSauce(newSauce: Sauce) {
    this._sauces.push(newSauce);
  }
}
