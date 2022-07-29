import IConsole from "./IConsole"

export default class Playstation implements IConsole{
    constructor(){
        this.configureRMTP();
        console.log("Console iniciando.");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Configurando o console");
    }
    authToken(): void {
        console.log("Playstation: logando na PSN.");
    }
    
}