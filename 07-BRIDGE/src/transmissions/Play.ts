import IPlatform from "../platforms/IConsole";
import IGaming from "./IGaming";

export default class Live implements IGaming{
    constructor(private platform: IPlatform){

    }

    playing(): void {
        console.log("Iniciando o jogo.");
    }
    result(): void {
        console.log("*******O jogo está rodando!!******")
    }
    
}