import styled from '@emotion/styled';
import { EditNote, NotificationsNone } from '@mui/icons-material';
import { Avatar, Box, Button, FormControl, Grid, InputLabel, Link, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const CustomBoxProfile = styled(Box)({
    width: "100%",
    height: "25vh",
    backgroundColor: "#F3F5F9",
    borderRadius: "0 0 10px 10px",
});

const CustomDpStack = styled(Box)(({ theme }) => ({

}));

const StyledFlex = styled(Box)`
  display: flex;
  align-items: center;
`;

const CustomTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-root": {
        height: "40px",
    },
    "& .MuiInputLabel-root": {
        fontWeight: "bold", // Increase the font weight here
    },
}));

const CustomButtonStack = styled(Stack)({
    justifyContent: "flex-end",
    alignItems: "center",
    // justifyContent: "center",
    padding: 10,
    marginRight: 40,
    height: "auto",
});



function Profile() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Box sx={{ backgroundColor: "#fcfcfd",pb:10 }}>
                <Box sx={{ pl: 1, pr: 1, backgroundColor: "#fcfcfd", height: "" }}>
                    {/* <Box sx={{ pl: 1, pr: 1, backgroundColor: "#fcfcfd", height: "" }}> */}

                    <CustomBoxProfile>
                        <Typography variant="h6" sx={{ p: 2 }}>Profile</Typography>
                    </CustomBoxProfile>
                    <Stack direction="row" spacing={2} sx={{ mt: -3 }}>
                        <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_1280.jpg" sx={{ width: 100, height: 100 }} />
                        <Stack justifyContent="center">
                            <Typography variant="h6" sx={{ marginBottom: '-4px' }}>John Doe</Typography>
                            <Typography variant="p" sx={{ fontSize: "11px" }}>John@gmail.com</Typography>
                            <Box sx={{ marginTop: '3px' }}>
                                <Link href="#" underline="none" sx={{ marginTop: 3 }} >
                                    <StyledFlex>
                                        <EditNote sx={{ fontSize: "15px" }} />
                                        <Typography sx={{ fontSize: "11px" }}>Change Profile Picture</Typography>
                                    </StyledFlex>
                                </Link>
                            </Box>
                        </Stack>

                    </Stack>
                    <Box sx={{ mt: 3, width: "75%", backgroundColor: "" }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <CustomTextField
                                    label="Full Name"
                                    placeholder="Placeholder text"
                                    multiline
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <CustomTextField
                                    label="Middle Name"
                                    placeholder="Placeholder text"
                                    multiline
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <CustomTextField
                                    label="Last Name"
                                    placeholder="Placeholder text"
                                    multiline
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <CustomTextField
                                    label="Phone Number"
                                    placeholder="Placeholder text"
                                    multiline
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <CustomTextField
                                    label="Office Desk Number"
                                    placeholder="Placeholder text"
                                    multiline
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <CustomTextField
                                    label="Location"
                                    placeholder="Placeholder text"
                                    multiline
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <CustomTextField
                                    label="Work Type"
                                    placeholder="Placeholder text"
                                    multiline
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <FormControl
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                        },
                                    }}
                                    fullWidth>
                                    <InputLabel sx={{ marginTop: "-6px" }} id="demo-simple-select-label">Delegation Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Delegation Type"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <FormControl
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            height: "40px",
                                        },
                                    }}
                                    fullWidth>
                                    <InputLabel sx={{ marginTop: "-6px" }} id="demo-simple-select-label">Delegation Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Delegation Type"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <CustomButtonStack spacing={2} direction="row" backgroundColor="">
                <Button sx={{
                    minWidth: '6rem',
                    color: 'black',
                    borderColor: 'black',
                }} variant="outlined">Cancel</Button>
                <Button sx={{ minWidth: '6rem' }} variant="contained">Save</Button>
            </CustomButtonStack>
        </>
    )
}

export default Profile