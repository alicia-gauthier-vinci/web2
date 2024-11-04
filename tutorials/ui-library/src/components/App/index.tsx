import pizza from "../../assets/images/pizza.jpg";
import Header from "../Header/index.tsx";
import Main from "../Main/index.tsx";
import Footer from "../Footer/index.tsx";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundImage: `url(${pizza})`,
      backgroundSize: 'cover',
    }}>
      <Header title="We love Pizza" version={0 + 1} />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
