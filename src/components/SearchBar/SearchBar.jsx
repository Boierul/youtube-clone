import './SearchBar.css'

import {Paper, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){
    return(
        <Paper
            component="form"
            onSubmit={() => {

            }}
            sx={{
                borderRadius: 0,
                border: '1px solid #202020',
                paddingLeft: 20,
                boxShadow: 'none',
                marginRight: { sm: 5},
                backgroundColor: "#202020",

            }}>

            <input
                className={"search-bar"}
                placeholder={"Search"}
                onChange={()=> {

                }}
            />

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