import React, { useState } from "react";
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer } from '@mui/material';
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';
//import { Link } from "react-router-dom";
import "../Styles/HeaderStyles.css";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography
            color={"goldenrod"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, my: 2 }}
        >
        </Typography>
    </Box>
);
    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{
                              mr: 2,
                              display: { sm: "none" },
                            }}
                            onClick={handleDrawerToggle}
                        >
                        </IconButton>
                        <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <FastfoodTwoToneIcon />
                            My Restaurant
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: "240px",
                        },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </>
    );
};

export default Header;