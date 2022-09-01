import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material'
import './App.css';

import {Navbar, Feed, VideoDetail, SearchFeed} from "./components/";

function App() {
    return (
        <BrowserRouter>
            {/* TODO delete the color attribute */}
            <Box sx={{backgroundColor: "#202020FF", color: "white"}}>
                <Navbar/>
                <Routes>
                    <Route
                        path="/"
                        exact element={
                        <Feed/>
                    }/>
                    <Route
                        path="/video/:id"
                        element={
                            <VideoDetail/>}/>
                    <Route
                        path="/search/:searchTerm"
                        element={
                            <SearchFeed/>
                        }/>
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;
