import React from "react";
import Layout from "../Components/Layout";
import { MenuList } from "../Data/data";
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography, } from "@mui/material";
 
const Menu = () => {
    return (
        <Layout>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {MenuList.map((menu) => (
                <Card sx={{ maxWidth: "350px", display: "flex", m: 3 }}>
                    <CardActionArea>
                    <CardMedia
                        sx={{ minHeight: "350px" }}
                        component={"img"}
                        src={menu.image}
                        alt={menu.name}
                    />
                    <CardContent>
                        <Typography variant="h5" gutterBottom component={"div"}>
                        {menu.name}
                        </Typography>
                        <Typography variant="body2">{menu.price}</Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                ))}
            </Box>
        </Layout>
    )
}

export default Menu;