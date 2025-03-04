import { ButtonIcon } from "@/components/shared/ui/buttons/button";
import s from "./style.module.css"
import IconPref from "@/assets/icons/MusicPlayer/iconPref";
import IconPlay from "@/assets/icons/MusicPlayer/iconPlay";
import IconNext from "@/assets/icons/MusicPlayer/iconNext";
import IconArrowHide from "@/assets/icons/MusicPlayer/iconArrowHide";

export default function Player (){
    return (
    <div className={s.player_wrapper}>
        <div className={s.preview_wrapper}>
            <img src="" alt=""/>
            <ButtonIcon icon={<IconArrowHide/>}/>
        </div>
        <section className={s.left}>
            <img src="" alt=""/>
        <h3>name song</h3>
        <h4>autor</h4>
    </section>
    <section className={s.center}>
        <div className={s.center_top}>
            <ButtonIcon icon={<IconPref/>}/>
            <ButtonIcon icon={<IconPlay/>}/>
            <ButtonIcon icon={<IconNext/>}/>
        </div>
        <div className={s.center_bottom}>
            <p>2;34</p>
            <div className={s.progress_bar}>
                <div className={s.progress}></div>
            </div>
            <p>4:50</p>
        </div>
    </section>
        <section className={s.right}>

        </section>
    </div>
    );
}
