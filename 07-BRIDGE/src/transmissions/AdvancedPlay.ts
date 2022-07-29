import IPlatform from "../platforms/IConsole";
import Play from "./Play";

export default class AdvancedLive extends Play{
    constructor(platform : IPlatform){
        super(platform);
    }

    challenge() : void{
        console.log("Modo desafio ativado.");
    }
    
}