import React from "react";
import projectVideo from "../images/chefVideo.mp4"

const Video = () => {
    return (
        <div className='videoContainer'>

            <h1 id="title">View our Newest <br></br>Cooking Tips</h1>
            <video id="view"  controls>
                <source src={projectVideo} type="video/mp4" />
                

            </video>

        </div>



    );
};

export default Video