import { Navbar } from "./components/Navbar";
import {Box, Divider, Stack} from "@mui/material"
import { Header } from "./components/Header";
import { Goals } from "./components/Goal";

function App() {
  return (
    <Box sx={{width:"100%"}}>
      <Navbar></Navbar>
      <Divider></Divider>
      <Stack spacing={2}>
        <Header></Header>
        <Divider></Divider>
        <Goals></Goals>
      </Stack>
    </Box>
  );
}

export default App;
