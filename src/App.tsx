import { BrowserRouter, Route, Routes } from "react-router-dom"
import UiKit from "./pages/uiKit"
import "./themes/normalize.css"
import "./themes/variable.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/ui" element={<UiKit/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/playlistpage" element={<PlayListPage/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
