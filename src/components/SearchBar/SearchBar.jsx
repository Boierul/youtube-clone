import './SearchBar.css'

import {Paper, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// M UI styling

export default function SearchBar(){
    return(
        <Paper
            className={'search-bar-form'}
            component="form"
            onSubmit={() => {

            }}
            sx={{
                borderRadius: 0,
                border: '1px solid #202020',
                paddingLeft: 20,
                boxShadow: 'none',
                marginRight: { sm: 5},
                backgroundColor: "#202020"
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
                    p: '10px',
                    color: 'rgba(143, 141, 141, 0.87)'
                }}>
                    <SearchIcon className={"search-bar-icon"}/>
            </IconButton>
        </Paper>
    )
}