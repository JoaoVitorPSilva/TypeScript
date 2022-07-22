export class Sauce {
  constructor(private _molho: string) {}

  get molho(): string {
    return this._molho;
  }
  set molho(molho: string) {
    this._molho = molho;
  }
}
