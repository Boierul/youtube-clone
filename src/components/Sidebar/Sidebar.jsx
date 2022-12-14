import './Sidebar.css'

import {Stack} from "@mui/material";
import {categories} from "../../utils/constants";

export default function Sidebar({selectedCategory, setSelectedCategory}) {
    return (
        <Stack
            direction={"row"}
            sx={{
                overflowY: "auto",
                height: {sx: 'auto', md: '95%'},
                flexDirection: {md: 'column'},
                padding: '10px',
                margin: '2px',
                '&::-webkit-scrollbar': {
                    height: '0.7em'
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#4B4A4AE5'
                }
            }}>

            {categories.map((category) => (
                <button
                    className={"category-btn"}
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory
                            && 'rgb(75, 74, 74)',
                        justifyContent: 'space-evenly',
                        height: '50px',
                        width: '200px',
                        borderRadius: '0.2rem'
                    }}
                    key={category.name}>
                    <span
                        className={"category-btn-icon"}
                        style={{
                            position: "sticky"
                        }}>
                        {category.icon}
                    </span>
                    <span
                        className={"category-btn-name"}
                        style={{
                            paddingRight: "15px",
                            fontSize: '16px'
                        }}>
                            {category.name}
                    </span>
                </button>
            ))}

        </Stack>
    )
}