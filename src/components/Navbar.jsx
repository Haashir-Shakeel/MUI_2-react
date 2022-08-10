import { AppBar, Badge, Box, styled, Toolbar, Typography } from "@mui/material"
import {AccessTime, Facebook, Instagram, Mail, Phone, Search, Twitter} from "@mui/icons-material"

export const Navbar = () =>{

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    }) 

    const Icons = styled(Box)({
       display:"flex",
       gap:"20px",
       alignItems:"center",

    })
    return (
        <AppBar sx={{color:"black", bgcolor:"white" }}>
            <StyledToolbar>
            <Icons>
                <Badge sx={{ml:2}} color="primary">
                <Mail/>
                </Badge>
                <Typography variant="span">jevellinuis@company.co</Typography>
                <Badge color="primary">
                <Phone/>    
                </Badge>
                <Typography variant="span">(024) 2 9871234 </Typography>
                <Badge color="primary">
                <AccessTime/>
                </Badge>    
                <Typography variant="span" >Mon.-Fri. 11AM-19PM </Typography>
            </Icons>   
            <Icons>
            <Badge color="primary">
                <Facebook/>
            </Badge>
            <Badge color="primary">
                <Instagram/>
            </Badge>
            <Badge color="primary">
                <Twitter/>
            </Badge>
            <Badge  color="primary">
                <Search/>
            </Badge>
            </Icons> 
            </StyledToolbar>
        </AppBar>
    )
}