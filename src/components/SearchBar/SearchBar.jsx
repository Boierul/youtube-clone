import './SearchBar.css'

import {Paper, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    };

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 0,
                border: '1px solid #202020',
                boxShadow: 'none',
                marginRight: {sm: 5},
                backgroundColor: "#202020",

            }}>

            <input
                className={"search-bar"}
                placeholder={"Search"}
                onChange={(e) => setSearchTerm(e.target.value)}/>
            <IconButton
                type={"submit"}
                sx={{
                    p: '8px',
                    color: 'rgba(143, 141, 141, 0.87)'
                }}>
                <SearchIcon className={"search-bar-icon"}
                            style={{
                                width: "1rem",
                            }}/>
            </IconButton>
        </Paper>
    )
}