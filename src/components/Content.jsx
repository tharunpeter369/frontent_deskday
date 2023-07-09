import React from 'react'
import { AppBar, Box, Stack } from '@mui/material'
import Navbar from './Navbar'
import Profile from './Profile'

function Content() {
    return (
        <Box sx={{ backgroundColor: "none" }} flex={4}>
            {/* <Stack direction={"column"} sx={{ height: "100vh" }}> */}
            <Stack direction={"column"} sx={{ height: "" }}>
                {/* Navbar */}
                <Stack sx={{ backgroundColor: "" }}>
                    <Navbar />
                </Stack>
                {/*Profile  */}
                {/* <Stack sx={{ backgroundColor: "none", height: "100vh" }}> */}
                <Stack sx={{ backgroundColor: "none", height: "" }}>
                    <Profile />
                </Stack>
            </Stack>
        </Box>
    )
}

export default Content