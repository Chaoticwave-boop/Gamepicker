import React from "react";
import '../gamecatalog.scss';
import { Grid, Link, Button } from '@mui/material';

const Navbar = () => {
    return (
        <div className="navbar_main">
            <Grid container>
                <Grid item xs={2}>
                    <Button href="/" variant="contained" color="secondary">MonsterHunter</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button href="/Hollowknight" variant="contained" color="secondary">Hollowknight</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button href="/Eldenring" variant="contained" color="secondary">Elden ring</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button href="/Gamepicker" variant="contained" color="secondary">Game Picker</Button>
                </Grid>
            </Grid>
        </div>
    )
}


export default Navbar

