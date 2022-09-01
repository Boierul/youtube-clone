import './Navbar.css'

import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';

import {logo} from '../../utils/constants';
import { SearchBar } from "../";

export default function Navbar() {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            p={1}
            sx={{
                background: '#202020',
                top: 0,
                position: "sticky",
                justifyContent: "relati"
            }}>
                <Link
                    to={"/"}
                    style={{
                        paddingLeft: 5,
                        display: 'flex',
                        background: '#202020',
                        top: 0,
                        justifyContent: 'space-between'
                    }}>
                    <img className={"logo-img"}
                         src={logo}
                         alt="logo"
                         height={35}
                    />
                </Link>
            <SearchBar />
        </Stack>
    )
}