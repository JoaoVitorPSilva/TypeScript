import IPlatform from "./platforms/IConsole";
import Playstation from "./platforms/Playstation";
import Xbox from "./platforms/Xbox";
import AdvancedPlay from "./transmissions/AdvancedPlay";
import Play from "./transmissions/Play";

function startPlay(platform : IPlatform){
    console.log("Aguarde....")
    const hardware = new Play(platform);
    hardware.playing();
    hardware.result();
}

function startAdvancedPlay(platform : IPlatform){
    console.log("Aguarde....")
    const hardware = new AdvancedPlay(platform);
    hardware.playing();
    hardware.result();
    hardware.challenge();
}

startPlay(new Xbox());
startAdvancedPlay(new Playstation());