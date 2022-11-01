import './VideoCard.css'
import React from 'react'
import {Link} from "react-router-dom";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl} from "../../utils/constants";

export default function VideoCard({video: {id: {videoId}, snippet}}) {
    console.log(videoId)
    return (
        <Card className={"card"}
              sx={{width: {xs: '100%', sm: '358px', md: "320px",}, boxShadow: "none", borderRadius: 0, textDecoration: "none"}}>
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
                <CardMedia className={"card-image"} image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
                           sx={{width: {xs: '100%', sm: '100%', md: '100%'}, height: 180}}
                />
            </Link>
            <CardContent className={"card-content"} sx={{backgroundColor: "#202020", height: '56px'}} >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} sx={{textDecoration: 'none'}}>
                    <Typography className={"card-title"} variant="subtitle2" fontWeight="bold" color="#FFF" style={{
                        textDecoration: 'underline'
                    }}>
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" color="gray" style={{textDecoration: 'underline'}}>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircleIcon sx={{fontSize: "12px", color: "gray", ml: "5px"}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}