import { ButtonIcon } from "@/components/shared/ui/buttons/button";
import s from "./style.module.css"
import IconPref from "@/assets/icons/MusicPlayer/iconPref";
import IconPlay from "@/assets/icons/MusicPlayer/iconPlay";
import IconNext from "@/assets/icons/MusicPlayer/iconNext";
import IconArrowHide from "@/assets/icons/MusicPlayer/iconArrowHide";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface IMusicData {
    id: number;
    title: string;
    artist: string;
    duration: number;
    image: string;
    url: string;
    
}

export default function Player (){
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const [musicData, setMusicData] = useState<IMusicData | null> (null);

    const musicRef = useRef<HTMLAudioElement> (null)

    const getMusicData = async ()=>{
        axios.get("./api/music_api.json")
        .then((response) => {
            console.log(response);
            setMusicData(response.data[0])
        })
        .catch((error) => {
            console.error("error", error);
        })
        .finally(() => {
            console.log("work")
        });
    };

    useEffect(() => {
        getMusicData();
        

    }, [])

    const handleChangePreview = (bool: boolean) => {
        setIsPreviewOpen(bool);
    };

    const handlePlay = ()=> {
        if(!musicRef.current) return
        musicRef.current.play();
    }


    return (
    <div className={s.player_wrapper}>
        {isPreviewOpen && (
        <div className={s.preview_wrapper}>
            <img src={musicData?.image} alt=""/>
            <ButtonIcon handleClick={() => handleChangePreview(false)}
            icon={<IconArrowHide/>}/>
        </div>
        )}
        <section className={s.left}>
        {!isPreviewOpen && ( 
                <img onClick={() => handleChangePreview(true)} src={musicData?.image} alt="" />
            )}
        <h3>{musicData?.title}</h3>
        <h4>{musicData?.artist}</h4>
    </section>
    <section className={s.center}>
        <div className={s.center_top}>
            <ButtonIcon icon={<IconPref/>}/>
            <ButtonIcon handleClick={handlePlay}icon={<IconPlay/>}/>
            <ButtonIcon icon={<IconNext/>}/>
        </div>
        <div className={s.center_bottom}>
            <p>2:34</p>
            <div className={s.progress_bar}>
                <div className={s.progress}></div>
            </div>
            <p>{musicData?.duration}</p>
        </div>
    </section>
        <section className={s.right}>

        </section>
        <audio ref={musicRef} src={musicData?.url}></audio>
    </div>
    );
}
