import { TransportadoraAdapter } from "./src/adapters/TransportadoraAdapter";
import { ICorreiosTransport } from "./src/correios/ICorreiosTransport";
import { Transportadora } from "./src/transportadora/Transportadora";


const transport : ICorreiosTransport = new TransportadoraAdapter(new Transportadora());

transport.sendCorreios();
transport.receiveCorreios();