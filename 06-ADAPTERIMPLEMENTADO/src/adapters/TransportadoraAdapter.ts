import { ICorreiosTransport } from "../correios/ICorreiosTransport";
import { Transportadora } from "../transportadora/Transportadora";

export class TransportadoraAdapter implements ICorreiosTransport{


    constructor(private transportadora: Transportadora){
        console.log("Adaptando Transportadora nos Correios");
    }

    sendCorreios(): void {
        this.transportadora.send();
    }
    receiveCorreios(): void {
        this.transportadora.receive();
    }
}