import './Navbar.css'

import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';

import {logo} from '../../utils/constants';
import {SearchBar} from "../";

export default function Navbar() {
    return (
        <Stack direction="row" alignItems="center" p={2}
               sx={{position: "normal",
                   top: 0,
                   justifyContent: "center",
                   alignContent: "center"
        }}>

            <img className={"logo-img"}
                 src={logo}
                 alt="logo"
                 height={35}
                 style={{
                     position: "static",
                     paddingRight: "3rem"
                 }}
            />

            <Link
                to={"/"}
                style={{
                    paddingLeft: 5,
                    display: 'grid',
                    background: '#202020',
                    top: 0
                }}>
            </Link>
            <SearchBar/>
        </Stack>
    )
}