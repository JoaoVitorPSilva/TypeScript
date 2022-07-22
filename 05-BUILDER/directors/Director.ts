import { Sauce } from "../classes/Sauce";
import { BreadType } from "../enums/BreadType";
import { ProteinType } from "../enums/ProteinType";
import { SanduicheType } from "../enums/SanduicheType";
import { IBuilder } from "../interfaces/IBuilder";

export class Director {
  constructor(private builder: IBuilder) {}

  constructHotDog() {
    this.builder.setBread(BreadType.FRANCES);
    this.builder.setProtein(ProteinType.SUINA);
    this.builder.setSalad(false);
    this.builder.setSanduicheType(SanduicheType.HOTDOG);
    this.builder.addSauces(new Sauce("Ketchup"));
    this.builder.addSauces(new Sauce("Maionese"));
    this.builder.addSauces(new Sauce("Mostarda"));
  }
  constructXSalada() {
    this.builder.setBread(BreadType.LANCHE);
    this.builder.setProtein(ProteinType.BOVINA);
    this.builder.setSalad(true);
    this.builder.setSanduicheType(SanduicheType.HAMBURGUER);
    this.builder.addSauces(new Sauce("Ketchup"));
    this.builder.addSauces(new Sauce("Maionese"));
    this.builder.addSauces(new Sauce("Molho Vermelho"));
  }
}
