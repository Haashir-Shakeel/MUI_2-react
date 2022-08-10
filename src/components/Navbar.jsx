import { Badge, Box, styled, Typography } from "@mui/material"
import {AccessTime, Facebook, Instagram, Mail, Phone} from "@mui/icons-material"

export const Navbar = () =>{
    const Icons = styled(Box)({
       display:"flex",
       gap:"20px",
       alignItems:"center",

    })
    return (
        <Box color="black" p={1}>
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
        </Box>
    )
}