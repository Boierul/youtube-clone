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
                border: '1px solid #282424',
                paddingLeft: 2,
                boxShadow: 'none',
                marginRight: { sm: 5}
            }}>

            <input
                className={"search-bar"}
                placeholder={"Search"}
                value={""}
                onChange={()=> {

                }}
            />

            <IconButton
                type={"submit"}
                sx={{
                    p: '10px',
                    color: 'red'
                }}
            >
                <SearchIcon/>
            </IconButton>
        </Paper>
    )
}