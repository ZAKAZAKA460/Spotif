import IconNext from "@/assets/icons/MusicPlayer/iconNext";
import IconPause from "@/assets/icons/MusicPlayer/iconPause";
import IconPlay from "@/assets/icons/MusicPlayer/iconPlay";
import IconPref from "@/assets/icons/MusicPlayer/iconPref";
import { ButtonIcon } from "@/components/shared/ui/buttons/button";
import Player from "@/components/widjets/player/player";

export default function UiKit() {
    return (<div style={{ background: "rgb(31, 31, 31)", display:"flex"}}>
        <IconNext/>
        
        <IconPlay/>
        <IconPref/>
        <ButtonIcon icon={<IconPause/>}/>
        <Player/>
    </div>);
}