import Playlist from "@/components/widjets/playList/playList/playList";
import axios from "axios";

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
        <main>
            <h1>Single play List</h1>
            <Playlist musicList={musiclist}/>
        </main>
    );
};
export {SinglePlaylistpage}