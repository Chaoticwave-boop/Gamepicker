import React from "react";
import '../gamecatalog.scss';
import { Grid, Button, Select, MenuItem, IconButton, TextField ,Checkbox  } from '@mui/material';
import data from "./games.json"
import SearchIcon from '@mui/icons-material/Search';
import Favorite from '@mui/icons-material/Favorite';
import { useState } from "react";

const Gamepicker = () => {
    const [ games, setGames ] = useState(data)

    return (
        <div className="gamecat">
            <TopButtons games={games}/>
        </div>
    )
}

const TopButtons = ({games}) => {
    const [searchedPrice, setSearchedPrice] = useState("");
    const [searchedGenre , setSearchedGenre] = useState("");
    const [ filteredData, setFilteredData ] = useState(games)

    var genres= []
    for (const x in data){
        if (genres.includes(data[x]["genre"]) == false){
            genres.push(data[x]["genre"])
        }
    }

    const Searched = () => {
        if (searchedGenre || searchedPrice) {
            const newGameList = [...games].filter((game) => {
                if (game.genre == searchedGenre){
                    return true
                } else if (game.price <= searchedPrice){
                    return true
                } else {
                    return false
                }
            });

            setFilteredData(newGameList);
        } else {
            setFilteredData(undefined)
        }
    }

    return (
        <div>
            <Grid container>
                <Grid className="selectpart" item xs={6}>
                    <Select className="select" onChange={(event) => setSearchedGenre(event.target.value)}>
                        {genres.map((genre, index) => {
                            return (
                                <MenuItem value={genre}>{genre}</MenuItem>
                            )
                        })}
                    </Select>
                    
                    <IconButton onClick={() => Searched()}><SearchIcon/></IconButton>
                </Grid>

                <Grid className="price_input" item xs={6}>
                    <TextField type="number" className="input" placeholder="price" onChange={(e) => setSearchedPrice(Number(e.target.value))}/>
                    <IconButton onClick={() => Searched()}><SearchIcon/></IconButton>
                </Grid>
            </Grid> 

            <Games games={filteredData}/>
        </div>
    )
} 


const Games = ({games}) => {
    const [boughtGames, setBoughtGames] = useState([]);

    const addGames = (checked, game) => {      
        if (checked == true) {
            boughtGames.push(game)
        } else {
            const newList = boughtGames.filter((item) => item.title !== game.title);
            setBoughtGames(newList);
        }
    }

    return (
        <div className="games_all">
            <div  className="showgames">
                {games.map((game, index) => {
                    return (
                        <div className="allgames">
                            <Checkbox checkedIcon={<Favorite />} color="secondary" onChange={(event) => addGames(event.target.checked, game)} />
                            <h3>{game.title}</h3>
                            {(game.price == 0) ? (<p>FREE</p>) : <p>{game.price}</p> }
                        </div>
                    )
                })}
            </div>
            <Button variant="contained" color="secondary" className="order" onClick={() => console.log(boughtGames)}>Order</Button>
        </div>
    )
}


export default Gamepicker