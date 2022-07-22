import { ICorreiosTransport } from "./ICorreiosTransport";

export class Correios implements ICorreiosTransport{

    sendCorreios(): void {
        console.log("Enviado pelo correio.")
    }
    receiveCorreios(): void {
        console.log("Recebido pelo correio.")

    }
}