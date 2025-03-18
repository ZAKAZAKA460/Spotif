import { ButtonIcon } from "@/components/shared/ui/buttons/button";
import s from "./style.module.css";
import IconPref from "@/assets/icons/MusicPlayer/iconPref";
import IconPlay from "@/assets/icons/MusicPlayer/iconPlay";
import IconNext from "@/assets/icons/MusicPlayer/iconNext";
import IconArrowHide from "@/assets/icons/MusicPlayer/iconArrowHide";
import { MouseEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { formatTime } from "@/components/shared/utils/formatTime.ts";
import IconPause from "@/assets/icons/MusicPlayer/iconPause.tsx";

interface IMusicData {
  id: number;
  title: string;
  artist: string;
  duration: number;
  image: string;
  url: string;
}

export default function Player() {
  const [duration,setDuration ] = useState(0);

  const [progress,setProgress ] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const [musicData, setMusicData] = useState<IMusicData | null>(null);

  const musicRef = useRef<HTMLAudioElement>(null);

  const getMusicData = async () => {
    axios
      .get("./api/music_api.json")
      .then((response) => {
        console.log(response);
        setMusicData(response.data[0]);
      })
      .catch((error) => {
        console.error("error", error);
      })
      .finally(() => {
        console.log("work");
      });
  };

  useEffect(() => {
    getMusicData();
  }, []);

  useEffect(() => {
    const audio = musicRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime);
      });
      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration)
      })
    }
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", () => {});
        audio.addEventListener("loadedmetadata", () => {});
      }
    };
  }, []);

  const handleChangePreview = (bool: boolean) => {
    setIsPreviewOpen(bool);
  };

  const handlePlay = () => {
    if (!musicRef.current) return;
    console.dir(musicRef.current);
    
    if (isPlaying) {
      musicRef.current.pause();
      setIsPlaying(() => false);
    } else {
      musicRef.current.play();
      setIsPlaying(() => true);
    }
  };

  const onSeek = (event: MouseEvent<HTMLDivElement>)=>{
    const audio = musicRef.current;
    if (audio) {
      const timelineWidth = event.currentTarget.offsetWidth;
      const clickPosition = event.nativeEvent.offsetX;
      const seekTime = (clickPosition / timelineWidth) * audio. duration;
      audio.currentTime = seekTime;

    }
  }

  return (
    <div className={s.player_wrapper}>
      {isPreviewOpen && (
        <div className={s.preview_wrapper}>
          <img src={musicData?.image} alt="" />
          <ButtonIcon
            handleClick={() => handleChangePreview(false)}
            icon={<IconArrowHide />}
          />
        </div>
      )}
      <section className={s.left}>
        {!isPreviewOpen && (
          <img
            onClick={() => handleChangePreview(true)}
            src={musicData?.image}
            alt=""
          />
        )}
        <h3>{musicData?.title}</h3>
        <h4>{musicData?.artist}</h4>
      </section>
      <section className={s.center}>
        <div className={s.center_top}>
          <ButtonIcon icon={<IconPref />} />
          <ButtonIcon handleClick={handlePlay} icon={ isPlaying ? <IconPause/>:<IconPlay />} />
          <ButtonIcon icon={<IconNext />} />
        </div>
        <div className={s.center_bottom}>
          <p>{formatTime(currentTime)}</p>
          <div onClick={onSeek} className={s.progress_bar}>
            <div style={{width:(currentTime/duration)*100 +"%" }} className={s.progress}></div>
          </div>
          <p>{formatTime(duration)}</p>
        </div>
      </section>
      <section className={s.right}></section>
      <audio ref={musicRef} src={musicData?.url}></audio>
    </div>
  );
}
