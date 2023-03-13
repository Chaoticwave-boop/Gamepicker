import React from "react";
import '../gamecatalog.scss';
import { Grid, Button, Select, MenuItem, IconButton, TextField ,Checkbox  } from '@mui/material';
import data from "./games.json"
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Favorite from '@mui/icons-material/Favorite';
import { useState } from "react";

const Gamepicker = () => {
    return (
        <div className="gamecat">
            <TopButtons/>
            <Games/>
            <Button variant="contained" color="secondary" className="order">Order</Button>
        </div>
    )
}


const TopButtons = () => {
    var genres= []
    for (const x in data){
        if (genres.includes(data[x]["genre"]) == false){
            genres.push(data[x]["genre"])
        }
    }
    return (
        <div>
            <Grid container>
                <Grid className="selectpart" item xs={6}>
                    <Select className="select">
                        {genres.map((genre, index) => {
                            return (
                                <MenuItem value={genre}>{genre}</MenuItem>
                            )
                        })}
                    </Select>
                    
                    <IconButton><SearchIcon/></IconButton>
                </Grid>

                <Grid className="price_input" item xs={6}>
                    <TextField className="input" placeholder="price"/>
                    <IconButton><SearchIcon/></IconButton>
                </Grid>
            </Grid> 
        </div>
    )
} 


const Games = () => {
    const [boughtGames, setBoughtGames] = useState([])
    return (
        <div  className="games_all">
            {data.map((game, index) => {
                return (
                    <div className="allgames">
                        <Checkbox checkedIcon={<Favorite />} color="secondary" />
                        <h3>{game.title}</h3>
                        {(game.price == 0) ? (<p>FREE</p>) : <p>{game.price}</p> }
                    </div>
                )
            })}
        </div>
    )
}


export default Gamepicker