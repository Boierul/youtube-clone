import './Feed.css'
import {Box, Stack} from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";

export default function Feed() {
    return (
        <Stack sx={{
            flexDirection: {
                sx: "column",
                md: "row"
            }
        }}>
            <Box sx={{
                height: {
                    sx: 'auto',
                    md: '92vh'
                },
                borderRight: '1px solid #3d3d3d',
                px: {sx: 0, md: 2},
            }}>

                <Sidebar/>

            </Box>
        </Stack>
    )
}