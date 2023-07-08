import { AccountCircleOutlined, BorderRight, FilterOutlined, Home, OtherHousesOutlined, SettingsOutlined, SmsOutlined } from '@mui/icons-material'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, styled } from '@mui/material'
import React, { useState } from 'react'


const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
}));

const CustomListIconButton = styled(ListItemButton)(({ theme }) => ({
    "&:hover": {
        backgroundColor: "#e5e9f2",
    },

    "&.active": {
        backgroundColor: theme.palette.primary.main,
    },
}));

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
    "& .MuiSvgIcon-root": {
        fontSize: "1.3rem",
    },
    // "&:hover": {
    //     backgroundColor: theme.palette.primary.main,
    //     // width: "60%", 
    // },
    // width: "10%",

    width: "100%",
    "&:hover": {
        backgroundColor: theme => theme.palette.primary.main,
        borderRadius: "10px",
    },
    "&.active": {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "10px",
    },
    margin: "5px",

}));


function Sidebar() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [activeItemIndex2, setActiveItemIndex2] = useState(0);

    const handleItemClick = (index) => {
        setActiveItemIndex(index);
    };

    const handleItemClick2 = (index) => {
        setActiveItemIndex2(index);
    };
    return (
        // <Box sx={{backgroundColor:"blue", display:{xs:"none",sm:"block"}}} flex={1}>
        <Box sx={{ backgroundColor: "none" }} flex={1}>
            <Stack direction={"row"}>
                {/* First vertical Block  */}
                <Stack sx={{ backgroundColor: "#E7EBF3", height: "100vh" }}>
                    {/* producnt icon  */}
                    <CustomBox>
                        <FilterOutlined color="primary" />
                    </CustomBox>
                    {/* icons  */}
                    <Box sx={{ backgroundColor: "none" }}>
                        <List disablePadding sx={{ backgroundColor: "none" }}>
                            <ListItem disablePadding>
                                {/* sdsd */}
                                {/* < CustomListItemContainer></CustomListItemContainer> */}
                                <CustomListItemButton disablePadding component="a" href='#home'
                                    className={activeItemIndex2 === 0 ? "active" : ""}
                                    onClick={() => handleItemClick2(0)}
                                >
                                    <OtherHousesOutlined />
                                </CustomListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <CustomListItemButton disablePadding component="a" href='#home'
                                    className={activeItemIndex2 === 1 ? "active" : ""}
                                    onClick={() => handleItemClick2(1)}
                                >
                                    <SmsOutlined />
                                </CustomListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <CustomListItemButton disablePadding component="a" href='#home'
                                    className={activeItemIndex2 === 2 ? "active" : ""}
                                    onClick={() => handleItemClick2(2)}
                                >
                                    <AccountCircleOutlined />
                                </CustomListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <CustomListItemButton disablePadding component="a" href='#home'
                                    className={activeItemIndex2 === 3 ? "active" : ""}
                                    onClick={() => handleItemClick2(3)}
                                >
                                    <SettingsOutlined />
                                </CustomListItemButton>
                            </ListItem>
                        </List>
                        <Divider sx={{ marginTop: '10px', backgroundColor: '#d9dfec' }} />

                    </Box>

                </Stack>
                {/* second vertical Block  */}
                <Stack sx={{ backgroundColor: "none", height: "100vh", width: "100%", borderRight: "1px solid #d8deeb" }}>
                    <Box padding={2} sx={{}}>
                        <Typography variant="h6">
                            Service Desk
                        </Typography>
                    </Box>
                    <List disablePadding sx={{ backgroundColor: "none" }}>
                        <ListItem disablePadding>
                            <CustomListIconButton
                                disablePadding
                                component="a"
                                href="#home"
                                className={activeItemIndex === 0 ? "active" : ""}
                                onClick={() => handleItemClick(0)}
                            >
                                <ListItemText primary="Profile" />
                            </CustomListIconButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <CustomListIconButton
                                component="a"
                                href="#home"
                                className={activeItemIndex === 1 ? "active" : ""}
                                onClick={() => handleItemClick(1)}
                            >
                                <ListItemText primary="Security" />
                            </CustomListIconButton>
                        </ListItem>
                    </List>
                </Stack>
            </Stack>
        </Box >
        // SmsOutlined
    )
}

export default Sidebar

