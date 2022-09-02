import './Videos.css'
import {Stack, Box} from "@mui/material";
import {VideoCard} from "../index";

export default function Videos({videos, direction}) {

    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap"
            justifyContent="start"
            alignItems="start"
            gap={2}>

            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item}/>}
                </Box>
            ))}

        </Stack>
    )
}