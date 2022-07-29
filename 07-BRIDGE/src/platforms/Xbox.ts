import IConsole from "./IConsole"

export default class Xbox implements IConsole{
    constructor(){
        this.configureRMTP();
        console.log("Xbox: Iniciando o console.")
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Xbox: Configurando o console.")
    }
    authToken(): void {
        console.log("Xbox: fazendo o login na Microsoft.")
    }
    
}