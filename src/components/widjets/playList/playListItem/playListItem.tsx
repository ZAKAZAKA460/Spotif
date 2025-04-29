import { ButtonIcon } from "@/components/shared/ui/buttons/button";
import s from "./style.module.css"
import IconArrowHide from "@/assets/icons/MusicPlayer/iconArrowHide";
import IconPlay from "@/assets/icons/MusicPlayer/iconPlay";
import { IMusicData } from "@/interfaces/interfaces";
import playerstore from "@/stores/playerstore";



interface IPlayListItemProps{
    item:IMusicData;
    index:number

}

const PlaylistItem = ({item, index}:IPlayListItemProps)=>{

    const handlePlay = ()=>{
        playerstore.fetchMusicById(item.id);
    }
    return (
    <tr className={s.wrapper}>
        <td>
            <div className={s.number_wrapper}>
            <p className={s.number}>1</p>
            <ButtonIcon handleClick={handlePlay} icon={<IconPlay />} />
            </div>
        </td>
        <td>
            <div className={s.info}>
                <img src="" className={s.preview} alt="" />

                <div className={s.name_wrapper}>
                    <div className={s.title}>{item.title}</div>
                    <div className={s.author}>{item.artist}</div>
                </div>
            </div>
        </td>
        <td>
            <p className={s.album}></p>
        </td>
        <td>
            <p className={s.date}>{item.year}</p>
        </td>
        <td>
            <div className={s.duration}>
                <ButtonIcon icon={<IconArrowHide />} />
                <p>{item.duration}</p>
            </div>
        </td>
    </tr>
)};

export default PlaylistItem;