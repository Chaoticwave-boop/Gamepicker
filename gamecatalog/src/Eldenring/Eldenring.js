import React from "react";
import '../gamecatalog.scss';
import { Grid, Rating } from '@mui/material';

const Eldenring = () => {
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
                        <h1>Eldenring</h1>
                        <p>
                            THE NEW FANTASY ACTION RPG. 
                            Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring
                            and become an Elden Lord in the Lands Between.
                        </p>
                        <Grid container className="tags">
                            <Grid item xs={3}>
                                <p>Open World</p>
                            </Grid>
                            <Grid item xs={3}>
                                <p>Third Person</p>
                            </Grid>
                            <Grid item xs={3}>
                                <p>Online Co-Op</p>
                            </Grid>
                            <Grid item xs={3}>
                                <p>Pvp</p>
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
                            <p>Genre: Adventure, Fighting, Platform</p>
                            <p>Developer: FromSoftware Inc.</p>
                            <p>release date: 25 Feb, 2022</p>
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
                        <Grid item xs={2}>
                            <img 
                                src="https://cdn.mos.cms.futurecdn.net/8gWTFzyHLQXnTGiVhRLeea.jpg"
                                style={{ width: 160, height: 114 }}>
                            </img>
                        </Grid>
                        <Grid item xs={2}>
                            <img 
                                src="https://www.gematsu.com/wp-content/uploads/2021/08/Elden-Ring_2021_08-27-21_002.jpg"
                                style={{ width: 160, height: 114 }}>
                            </img>
                        </Grid>
                        <Grid item xs={2}>
                            <img 
                                src="https://www.videogameschronicle.com/files/2021/06/04.jpg"
                                style={{ width: 160, height: 114 }}>
                            </img>
                        </Grid>
                        <Grid item xs={2}>
                            <img 
                                src="https://sm.ign.com/ign_nl/gallery/e/elden-ring/elden-ring-gameplay-demo-screenshots_svhh.jpg"
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
            <p>OS: Windows 10</p>
            <p>Processor: INTEL CORE I5-8400 or AMD RYZEN 3 3300X.</p>
            <p>Memory: 12 GB RAM.</p>
            <p>Storage:	60 GB available space.</p>
            <p>Graphics: NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB</p>

        </div>
    )
}

const Review = () => {
    return (
        <div className="reviews">
            <h1>Reviews</h1>
            <p> shawnpeat: "RPG? What role am I playing? The victim?"</p>
            <p>
                Yoshi:
                   " "Try jumping"
                    *20 bloodstains surrounding the message* "
            </p>
        </div>
    )
}


export default Eldenring