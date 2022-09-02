import './VideoCard.css'
import React from 'react'
import {Link} from "react-router-dom";
import {Typography, Card, CardContent, CardMedia} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from "../../utils/constants";

export default function VideoCard({video: {id: {videoId}, snippet}}) {
    console.log(videoId)
    return (
        <div>
            VideoCard
        </div>
    )
}