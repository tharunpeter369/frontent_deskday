import styled from '@emotion/styled'
import { AccessTime, ArrowBackIosOutlined, HelpOutline, NotificationsNone, Search } from '@mui/icons-material'
import { AppBar, Box, IconButton, InputBase, Stack, Toolbar, Grid, Typography, Avatar } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: "space-between",

})

const StyledBox1 = styled(Box)(({ theme }) => ({
    backgroundColor: "none",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    border: "1px solid #d9dfec"
}));

const StyledSearchIcon = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    // alignItems: 'center',
    border: '1px solid rgb(213, 215, 224)',
    paddingRight: '10px',
    borderRadius: "10px",
    // padding: '5px',
    backgroundColor: '#fcfcfd',
    height: '100%',
    '&:hover': {
        borderColor: 'rgb(0, 161, 253)',
    },
}));

const StyledSearchBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: '2px',
    marginLeft: '2px',
    padding: '5px',
    backgroundColor: ' #fcfcfd)',
}));

const StyledFlex = styled(Box)`
  display: flex;
  align-items: center;
  margin-left:12px;
`;

const StyledTypography = styled(Typography)(({ theme }) => ({
    marginLeft: "5px",
    fontSize: "15px"
}));
const StyledAvatar = styled(Avatar)`
  position: relative;
  background-color: orange;
  width: 40px;
  height: 40px;
`;


const OnlineIndicator = styled('div')({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'green',
    position: 'absolute',
    bottom: '12px',
    right: '22px',
})

function Navbar() {
    return (
        <Box sx={{ backgroundColor: "none", borderBottom: "1px solid #d8deeb", position: "sticky" }}>
            <StyledToolbar>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {/* stack 1 */}
                    <Stack direction="row" sx={{ backgroundColor: "none" }}>
                        {/* back arrow  */}
                        <StyledBox1>
                            <IconButton>
                                <ArrowBackIosOutlined sx={{ fontSize: "15px" }} />
                            </IconButton>
                        </StyledBox1>
                        <Box sx={{ display: "flex" }}>
                            <Stack direction="row" alignItems="center">
                                <StyledSearchIcon>
                                    <StyledSearchBox>
                                        <Search style={{ color: 'grey', paddingRight: '10px' }} />
                                    </StyledSearchBox>
                                    <InputBase placeholder="Search" sx={{ width: '80%' }} />
                                </StyledSearchIcon>
                            </Stack>
                        </Box>
                    </Stack>

                    {/* stack 2 */}
                    <Stack direction="row" sx={{ backgroundColor: "none", marginLeft: "20px" }}>
                        <StyledFlex >
                            <AccessTime sx={{ fontSize: "20px" }} />
                            <StyledTypography variant="body1">Recent</StyledTypography>
                        </StyledFlex>
                        <StyledFlex>
                            <HelpOutline sx={{ fontSize: "20px" }} />
                            <StyledTypography variant="body1">Support</StyledTypography>
                        </StyledFlex>
                        <StyledFlex>
                            <Box sx={{ position: "relative" }}>
                                <NotificationsNone sx={{ fontSize: "20px" }} />
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '3px',
                                        right: '2px',
                                        backgroundColor: 'red',
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                    }}
                                ></span>
                            </Box>
                            <StyledTypography variant="body1">Notification</StyledTypography>
                        </StyledFlex>
                    </Stack>
                </Box>

                {/* stack 3 */}
                <Stack direction="row" sx={{ backgroundColor: "none" }}>
                    <Box sx={{ backgroundColor: "none" }}>
                        <StyledAvatar variant="rounded">JD</StyledAvatar>
                        <OnlineIndicator />
                    </Box>
                </Stack>
            </StyledToolbar>
        </Box>
    )
}

export default Navbar