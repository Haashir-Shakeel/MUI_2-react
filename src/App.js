import { Navbar } from "./components/Navbar";
import {Box, Divider, Stack,styled} from "@mui/material"
import { Header } from "./components/Header";
import { Goals } from "./components/Goal";

const StyledBox = styled(Box)(({theme})=>({
  minHeight: '100vh',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/bg1.jpg'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'

}))

function App() {
  return (
    <StyledBox>
      
      <Stack spacing={4} justifyContent="center" >
        <Navbar></Navbar>
        <Divider></Divider>
        <Header/>
        <Goals/>
      </Stack>
    </StyledBox>
  );
}

export default App;
