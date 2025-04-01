import PlaylistItem from "../playListItem/playListItem";
import s from "./style.module.css"
import clock from "@/assets/icons/other/clock.svg"

const Playlist = ()=> {
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
            <PlaylistItem/>
            <PlaylistItem/>
            <PlaylistItem/>
        </tbody>
    </table>
        
    
};

export default Playlist;