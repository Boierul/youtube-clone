import './Videos.css'
import {Stack, Box} from "@mui/material";
import {VideoCard} from "../index";

export default function Videos({videos, direction}) {

    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
            padding={'15px'}
        >

            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item}/>}
                </Box>
            ))}

        </Stack>
    )
}