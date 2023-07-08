import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import { Box, Stack } from '@mui/material'

function Home() {
    return (
        <Stack direction={"row"} >
            <Sidebar />
            <Content />
        </Stack>
    )
}

export default Home