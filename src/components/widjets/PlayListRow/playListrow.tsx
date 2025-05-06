import { PlayListCard } from "@/components/shared/ui/playListCard/playListCard";
import { IPlaylist } from "@/interfaces/interfaces";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import s from "./style.module.css"

interface PlayListRowProps{
    id:number;
}




const PlayListRow = ({id}:PlayListRowProps) => {

    const [playList, setPlayList]=useState<IPlaylist[]>([]);
    const fetchPlayList = async () =>{
        const res = await axios.get(`/api/playList_api.json`);
        setPlayList(res.data)
    }
    useEffect(() =>{
        fetchPlayList();

    },[])
    return <div className={s.list}>
        {
            playList.map((item)=>{
                return<Fragment key={item.id}>
                    <PlayListCard card={item}/>
                </Fragment>
            })
        }
    </div>;
};

export{PlayListRow}