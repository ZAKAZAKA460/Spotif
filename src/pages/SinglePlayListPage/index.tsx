import Playlist from "@/components/widjets/playList/playList/playList";
import axios from "axios";
import s from "./style.module.css"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SinglePlaylistpage = ()=> {

    const [musiclist, setMusicList] = useState([]);

    const {playlistId}=useParams();

    const getMisucList =async () =>
    {
        axios.get("/api/music_api.json")
        .then((response)=>{
            setMusicList(response.data)
        })
        .catch(error =>{
        console.error("Error", error);
    })
}
    

    useEffect(()=>{
        getMisucList()
    },[])


    return (
        <main className={s.page_wrapper}>
            <div className={s.sidebar}>Sidebar</div>

            <div className={s.playlist_wrapper}>
                <div className={s.top}></div>
                <div className={s.main}>
                     <Playlist musicList={musiclist}/>
                </div>
               
            </div>
            <div className={s.sidebar}>Sidebar</div>
        </main>
    );
};
export {SinglePlaylistpage};