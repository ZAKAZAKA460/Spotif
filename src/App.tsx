import { BrowserRouter, Route, Routes } from "react-router-dom"
import UiKit from "./pages/uiKit"
import "./themes/normalize.css"
import "./themes/variable.css"
import Main from "@/pages/main";
import { SinglePlaylistpage } from "@/pages/SinglePlayListPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/playlist/:playlistId" element={<SinglePlaylistpage/>}/>
        <Route path="/ui" element={<UiKit/>}/>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
