import React from "react";
import { Grid, Rating} from '@mui/material';
import '../gamecatalog.scss';

const MonsterHunter = () => {
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
                        <h1>MonsterHunter World</h1>
                        <p>
                            Welcome to a new world! In Monster Hunter: World,
                            the latest installment in the series, you can enjoy the ultimate
                            hunting experience, using everything at your disposal to 
                            hunt monsters in a new world teeming with surprises and excitement.
                        </p>
                        <Grid container className="tags">
                            <Grid item xs={3}>
                                <p>multiplayer</p>
                            </Grid>
                            <Grid item xs={3}>
                                <p>action</p>
                            </Grid>
                            <Grid item xs={3}>
                                <p>MMO rpg</p>
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
                            <p>Multiplayer</p>
                            <p>Online PvE</p>
                            <p>Genre:  Hack and slash, Adventure Game</p>
                            <p>Developer: Capcom</p>
                            <p>release date: 9 Aug, 2018</p>
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
                                src="https://media.comicbook.com/2017/11/monsterhunterworld-9-1-1059531.jpg"
                                style={{ width: 160, height: 114 }}>
                            </img>
                        </Grid>
                        <Grid item xs={2}>
                            <img 
                                src="https://images.nvidia.com/aem-dam/Solutions/geforce/news/monster-hunter-world-nvidia-dlss/monster-hunter-world-nvidia-dlss-4k-screenshot-001.jpg"
                                style={{ width: 160, height: 114 }}>
                            </img>
                        </Grid>
                        <Grid item xs={2}>
                            <img 
                                src="https://gamingbolt.com/wp-content/uploads/2017/12/monster-hunter-world-1-10.jpg"
                                style={{ width: 160, height: 114 }}>
                            </img>
                        </Grid>
                        <Grid item xs={2}>
                            <img 
                                src="https://preview.redd.it/ssrjqqhajd301.jpg?width=640&crop=smart&auto=webp&s=310e45f76c26983f3d88b58d8b666b28d1dacb15"
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
            <p>OS: Windows® 7, 8, 8.1, 10 (64-bit required)</p>
            <p>Processor: Intel® Core™ i5 4460 or Core™ i3 9100F / AMD FX™-6300 or Ryzen™ 3 3200G</p>
            <p>Memory: 8GB RAM</p>
            <p>Storage:	48 GB available space (additional 45 GB for High Resolution Texture Pack)</p>
            <p>Graphics: NVIDIA®GeForce®GTX 760 or GTX1050 or AMD Radeon™ R7 260x or RX 560</p>

        </div>
    )
}

const Review = () => {
    return (
        <div className="reviews">
            <h1>Reviews</h1>
            <p>
                MoonMorc: 
                   " Game has incredible depth. 
                    Every weapon is different. 
                    Every monster is different. Still, 
                    there's enough predictability to give you a sense of accomplishment 
                    when you complete a quest a little better than your last. And enough 
                    chaos you can't help but laugh at some of the antics from the monsters, 
                    other players or even yourself."
            </p>
            <p>
                Anil:
                   " I am a Monster Hunter now"
            </p>
        </div>
    )
}


export default MonsterHunter