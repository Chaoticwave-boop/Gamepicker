import React from "react";
import '../gamecatalog.scss';
import { Grid, Button, Select, MenuItem, IconButton, TextField ,Checkbox, Rating  } from '@mui/material';
import data from "./games.json"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShoppingBasket from "./ShoppingBasket";

const Gamepicker = () => {
    const [ games, setGames ] = useState(data)

    return (
        <div className="gamecat">
            <TopButtons games={games}/>
        </div>
    )
}

const TopButtons = ({games}) => {
    const [ searchedPrice, setSearchedPrice ] = useState("");
    const [ searchedGenre , setSearchedGenre ] = useState("");
    const [ searchedRating, setSearchedRating ] = useState("");
    const [ filteredData, setFilteredData ] = useState(games)

    var genres= []
    for (const x in data){
        if (genres.includes(data[x]["genre"]) == false){
            genres.push(data[x]["genre"])
        }
    }

    const SearchedGenre = () => {
        if (searchedGenre) {
            const newGameList = [...games].filter((game) => {
                if (game.genre === searchedGenre){
                    return true
                } else {
                    return false
                }
            });

            setFilteredData(newGameList);
        } else {
            console.log("its empty")
        }
    }

    const SearchedPrice = () => {
        if (searchedPrice) {
            const newGameList = [...games].filter((game) => {
                if (game.price <= searchedPrice){
                    return true
                } else {
                    return false
                }
            });
            
            setFilteredData(newGameList);
        } else {
            console.log("its empty")
        }
    }

    const SearchedRating = () => {
        if (searchedRating){
            const newGameList = [...games].filter((game) => {
                if (game.rating <= searchedRating){
                    return true
                } else {
                    return false
                }
            })

            setFilteredData(newGameList)
        } else {
            console.log("its empty")
        }
    }

    return (
        <div>
            <Grid container>
                <Grid className="selectpart" item xs={5}>
                    <Select className="select" onChange={(event) => setSearchedGenre(event.target.value)}>
                        {genres.map((genre, index) => {
                            return (
                                <MenuItem value={genre}>{genre}</MenuItem>
                            )
                        })}
                    </Select>
                    
                    <IconButton onClick={() => SearchedGenre()}  className="search"><SearchIcon/></IconButton>
                </Grid>

                <Grid item xs={2} className="rating">
                    <Rating  onChange={(event) => setSearchedRating(event.target.value)}/>
                    <IconButton onClick={() => SearchedRating()} className="search"><SearchIcon/></IconButton>
                </Grid>

                <Grid className="price_input" item xs={5}>
                    <TextField type="number" className="input" placeholder="price" onChange={(e) => setSearchedPrice(Number(e.target.value))}/>
                    <IconButton onClick={() => SearchedPrice()}  className="search"><SearchIcon/></IconButton>
                </Grid>
                
            </Grid> 

            <Games games={filteredData}/>
        </div>
    )
} 


const Games = ({games}) => {
    const [ boughtGames, setBoughtGames ] = useState([]);
    const [ showGames , setShowGames ] = useState(true);
    const [ showShopping , setShowShopping ] = useState(false);
    const [ totalPrice, setTotalPrice ] = useState([]);

    const addGames = (checked, game) => {      
        if (checked == true) {
            boughtGames.push(game)
        } else {
            const newList = boughtGames.filter((item) => item.title !== game.title);
            setBoughtGames(newList);
        }
    }

    return (
       <div>
            {showGames && (
                <div className="games_all">
                    <div  className="showgames">
                        {games.map((game, index) => {
                            return (
                                <div className="allgames">
                                    <Checkbox checkedIcon={<AutoAwesomeIcon />} className="check" onChange={(event) => addGames(event.target.checked, game)} />
                                    <h3>{game.title}</h3>
                                    {(game.price == 0) ? (<p>FREE</p>) : <p>{game.price}</p> }
                                 </div>
                            )
                        })}
                    </div>
                    <Button variant="contained" className="order" onClick={() => {
                        setShowGames(false);
                        setShowShopping(true);
                        boughtGames.map((game) => {
                            totalPrice.push(game.price)
                        })
                    }}>Order</Button>
                </div>
            )}

            {showShopping && (
                <ShoppingBasket boughtGames={boughtGames} totalPrice={totalPrice}/>
            )}
       </div>
    )
}


export default Gamepicker