import React from 'react'
import "./VideoCard.css"
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ image, channel, views, timestamp, channelImage, title }) {
    return (
        <div className="videocard">
            <img className="videocard__thumbnail" src={image} alt="" />
            <div className="videocard__info">
                <Avatar className="videocard__avatar" alt={channel} src={channelImage}
                />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} Views . {timestamp}</p>

                </div>
            </div>
        </div>
    )
}

export default VideoCard
