import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HomeCard from "./card";
import Drawer from "../../Components/drawer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Drawer>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Item>
            <HomeCard />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <HomeCard />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <HomeCard />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <HomeCard />
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Drawer>
  );
}
