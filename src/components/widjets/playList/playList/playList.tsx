import axios from "axios";
import PlaylistItem from "../playListItem/playListItem";
import s from "./style.module.css"
import clock from "@/assets/icons/other/clock.svg"
import { Fragment, useEffect, useState } from "react";

interface PlayListProps{
    musicList:any[];
}

const Playlist = ({musicList}: PlayListProps)=> {

    return <table>
        <thead>
            <tr>
                <th>#</th>
                <th>TITLE</th>
                <th>ALBUM</th>
                <th>DATADDED</th>
                <th><img width={22} src ={clock} alt = ""/></th>
            </tr>
        </thead>
        <tbody>
            {
              musicList &&  musicList.map((item, i)=>{
                    return(
                        <Fragment key={i}>
                            <PlaylistItem item={item} index={i+1}/>
                        </Fragment>
                    )
                })}
        </tbody>
    </table>
        
    
};

export default Playlist;