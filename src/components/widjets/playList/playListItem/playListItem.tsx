import { ButtonIcon } from "@/components/shared/ui/buttons/button";
import s from "./style.module.css"
import IconArrowHide from "@/assets/icons/MusicPlayer/iconArrowHide";
import IconPlay from "@/assets/icons/MusicPlayer/iconPlay";


const PlaylistItem = ()=> {
    return(
        <tr className={s.wrapper}>
            <td className={s.number_wrapper}>
                <p className={s.number}>1</p>
                <ButtonIcon icon={<IconPlay/>}/>
            </td>
            <td>
                <div className={s.info}>
                    <img src="" className={s.preview} alt =""/>
    
                    <div className={s.name_wrapper}>
                        <div className={s.title}>SongName</div>
                        <div className={s.author}>Artist</div>
                    </div>
                </div>
            </td>
            <td>
                <p className={s.album}></p>
            </td>
            <td>
                <p className={s.date}>2009</p>
            </td>
            <td >
                <div className={s.duration}>
                <ButtonIcon icon = {<IconArrowHide/>}/>
                <p>2.17</p>
                </div>
            </td>
        </tr>
    )
};

export default PlaylistItem;