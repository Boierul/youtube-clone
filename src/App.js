import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material'
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed/Feed";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import SearchFeed from "./components/SearchFeed/SearchFeed";


function App() {
    return (
        <BrowserRouter>
            {/* TODO delete the color attribute */}
            <Box sx={{backgroundColor: "#000", color: "white"}}>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        exact element={
                        <Feed/>
                    } />
                    <Route
                        path="/video/:id"
                        element={
                        <VideoDetail/>
                    } />
                    <Route
                        path="/search/:searchTerm"
                        element={
                            <SearchFeed/>
                        } />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;
