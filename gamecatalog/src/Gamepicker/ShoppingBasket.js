import React, { useEffect } from "react";
import { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';



const ShoppingBasket = ({ boughtGames, totalPrice }) => {
    const [ boughtGamesAll, setBoughtGames ] = useState(boughtGames);
    const [ totalPrices, setTotalPrices ] = useState(totalPrice);

    return (
        <div>
            <Basket totalPrices={totalPrices} boughtGamesAll={boughtGamesAll} setBoughtGames={setBoughtGames}/>
        </div>
    )
}

const Basket = ({totalPrices, boughtGamesAll}) => {
    const [ total, setTotal ] = useState(totalPrices);
    const [  finalList, setFinalList ] = useState(boughtGamesAll);

    const deleteGame = (game, index) => {
        const newList = finalList.filter((item) => item.title !== game.title);
        setFinalList(newList);   
        total.splice(index, 1);
    }

    return (
        <div>
            {finalList.map((game, index) => {
                return (
                    <div className="bought_games">
                        <h3>{game.title}</h3>
                        {(game.price == 0) ? (<p>FREE</p>) : <p>{game.price}</p> }
                        <IconButton className="delete" onClick={() => deleteGame(game, index)}><DeleteIcon/></IconButton>
                    </div>
                )
            })}
             <div>
                <TotalPrice TotalPrice={total} /> 
            </div>

        </div>
    )
}

const TotalPrice = ({TotalPrice}) => {
    const Total = TotalPrice.reduce((a, b) => a + b, 0);
    return (
        <div>
            <p>Total = {Total.toFixed(2)}</p>
        </div>
    )

}



export default ShoppingBasket