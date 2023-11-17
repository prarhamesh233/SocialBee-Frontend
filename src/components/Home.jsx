import React from "react";
import '../css/Home.css'


function Home(){
    return (
        <div className=" home">
            <div className="card-post">
            <h3 className="card-id">shubh</h3>
                <div className="card-image">
                    <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
                </div>
                <div className="card-content">
                <div className="card-icons"><span className="material-icons">favorite</span></div>  
                    <p>emma watson</p>
                    <input type="text" id="text" placeholder="Add comment"></input>
                </div>
                </div>
                <div className="card-post">
                <h3 className="card-id">shubh</h3>
                <div className="card-image">
                    <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
                </div>
                <div className="card-content">
                <div><span className="material-icons">favorite</span></div>
                    <p>emma watson</p>
                    <input type="text" id="text" placeholder="Add comment"></input>
                </div>

            </div>
            <div className="card-post">
            <h3 className="card-id">shubh</h3>
                <div className="card-image">
                    <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
                </div>
                <div className="card-content">
                <div><span className="material-icons">favorite</span></div>
                    <p>emma watson</p>
                    <input type="text" id="text" placeholder="Add comment"></input>
                </div>

            </div>

            
        </div>
    );
}
export default Home;