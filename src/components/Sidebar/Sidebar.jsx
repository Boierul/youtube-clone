import './Sidebar.css'

import {Stack} from "@mui/material";
import {categories} from "../../utils/constants";

const selectedCategory = "New";

export default function Sidebar() {
    return (
        <Stack
            direction={"row"}
            sx={{
                overflowY: "auto",
                height: {sx: 'auto', md: '95%'},
                flexDirection: {md: 'column'},
                padding: '10px',
                margin: '2px'
            }}>

            {categories.map((category) => (
                <button
                    className={"category-btn"}
                    style={{
                        background: category.name === selectedCategory
                            && 'rgb(75, 74, 74)'
                    }}
                >
                    <span
                        className={"category-btn-icon"}>{category.icon}</span>
                    <span className={"category-btn-name"}>{category.name}</span>
                </button>
            ))}

        </Stack>
    )
}