import { Sort } from "@mui/icons-material"
import { Box, IconButton, styled, Typography } from "@mui/material"



export const Header = () =>{
    return (
        <Box>
        <Box  flex={3} display="flex" justifyContent="space-between" alignItems='flex-start' p={1}>
            <Typography ml={2} mt={2} variant="h5" color="white">JEVELLIN</Typography>
            <IconButton>
                <Sort sx={{color:'#fff'}}/>
            </IconButton>
        </Box>

        <Box flex={3} display="flex" justifyContent="center" alignItems="flex-start">
            <Typography variant="h4" color="white">Welcome to Jullevin</Typography>
        </Box>
        </Box>
    ) 
}