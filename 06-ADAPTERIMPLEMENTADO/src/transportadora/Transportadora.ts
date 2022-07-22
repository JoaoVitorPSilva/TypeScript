import { ITransportadoraTransport } from "./ITransportadoraTransport";

export class Transportadora implements ITransportadoraTransport{
    
    send(): void {
        console.log("Enviado pelo Sedex.")
    }
    receive(): void {
        console.log("Recebido pelo Sedex.")
    }

}