import "./App.css";
import Header from "../Header/index.tsx";
import Main from "../Main/index.tsx";
import Footer from "../Footer/index.tsx";
import { useState } from "react";


function App() {

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="page">
      <Header
        title="We love Pizza"
        version={0 + 1} 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}/>
      <Main isPlaying={isPlaying} />
      <Footer />
    </div>
  );
}

export default App;
