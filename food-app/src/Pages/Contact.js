import React from "react";
import Layout from "../Components/Layout";
import { Box, Typography } from "@mui/material";

const Contact = () => {
    return (
        <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturant</Typography>
        
        </Box>
        </Layout>
    )
}

export default Contact;