import './Feed.css'

import {Box, Stack, Typography} from "@mui/material";
import {Videos, SideBar} from "../../components";

import {fetchFromAPI} from "../../utils/fetchFromApi";
import {useEffect, useState} from "react";

export default function Feed() {

    const [selectCategory, setSelectCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectCategory}`)
            .then((data) => {
                setVideos(data.items)
            })
    }, [selectCategory]);


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

                <SideBar
                    selectedCategory={selectCategory}
                    setSelectedCategory={setSelectCategory}
                />

            </Box>

            <Box p={2}
                 sx={{
                     overflowY: 'auto',
                     height: '90vh',
                     flex: 2
                 }}>
                <Typography variant={"h5"}
                            fontWeight={"bold"}
                            mb={2}>
                    <span className={"category-text"}>{selectCategory} videos</span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    )
}