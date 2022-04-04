import React from 'react'
import "./ImageCard.css"
import more_icon from "../../img/more_icon.png"
import upload_icon from "../../img/upload_icon.png"
const ImageCard = (probs) => {
  return (
    <div>

        <div className="container">
            <img src={probs.image} alt="Snow" className='main_image'/>
            <div className="top_right">Save</div>
            <div className="bottom_right">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
            </div>
        </div>

    </div>
  )
}

export default ImageCard