import React from "react";
import '../gamecatalog.scss';
import { Grid, Rating } from '@mui/material';

const Hollowknight = () => {
    return (
        <div className="mainPage">
            <NameInfo/>
            <ScreenShots/>
            <SystemRequirements/>
            <Review/>
        </div>
    )
}

const NameInfo = () => {
    return (
        <div className="nameinfo">
            <Grid container>
                <Grid item xs={8} className="gameinfo">
                    <div>
                        <h1>Hollowknight</h1>
                        <p>
                            Forge your own path in Hollow Knight! 
                            An epic action adventure through a vast ruined kingdom of insects and heroes. 
                            Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, 
                            all in a classic, hand-drawn 2D style.
                        </p>
                        <Grid container className="tags">
                            <Grid item xs={3}>
                                <p>Open World</p>
                            </Grid>
                            <Grid item xs={3}>
                                <p>Metroidvania</p>
                            </Grid>
                            <Grid item xs={3}>
                                <p>2D</p>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={4}className="extrainfo">
                    <div>
                        <div>
                            <div>
                                rating:   
                                <Rating value={5} disabled />
                            </div>
                            <p>SinglePlayer</p>
                            <p>Souls like</p>
                            <p>Genre: Metroidvania, fighting</p>
                            <p>Developer: Team cherry</p>
                            <p>release date: 24 Feb, 2017</p>
                        </div>
                     
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

const ScreenShots = () => {
    return (
        <div>
            <Grid container className="screenshots">
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={2} >
                            <img 
                                src="https://www.kompulsa.com/wp-content/uploads/2020/04/Hollow-Knight-Screenshot.jpg"
                                style={{ width: 160, height: 114 }}>
                            </img>
                        </Grid>
                        <Grid item xs={2}>
                            <img 
                                src="https://ip.trueachievements.com/remote/www.trueachievements.com/customimages/085538.jpg?width=900"
                                style={{ width: 160, height: 114 }}>
                            </img>
                        </Grid>
                        <Grid item xs={2}>
                            <img 
                                src="https://steamuserimages-a.akamaihd.net/ugc/785230361342827753/5D0EBFBA712FCB2A86D0382B454A90C2AE54FD98/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                                style={{ width: 160, height: 114 }}>
                            </img>
                        </Grid>
                        <Grid item xs={2}>
                            <img 
                                src="https://www.mobygames.com/images/promo/original/1529314318-1142060035.jpg"
                                style={{ width: 160, height: 114 }}>
                            </img>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}


const SystemRequirements = () => {
    return (
        <div className="requirements">
            <h1>SystemRequirements</h1>
            <p>OS: Windows 7 (64bit)</p>
            <p>Processor: Intel Core 2 Duo E5200.</p>
            <p>Memory: 4 GB RAM.</p>
            <p>Storage:	 9 GB available space.</p>
            <p>Graphics: GeForce 9800GTX+ (1GB)</p>

        </div>
    )
}

const Review = () => {
    return (
        <div className="reviews">
            <h1>Reviews</h1>
            <p> iDkay: "v good"</p>
            <p>
                Yoshi:
                   " More than 2d dark souls. 
                    Outstanding game design: art, soundtrack, world,
                     bosses and builds. It has high skill ceiling and offers hard challenges."
            </p>
        </div>
    )
}


export default Hollowknight