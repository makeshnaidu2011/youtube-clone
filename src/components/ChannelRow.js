import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import "./ChannelRow.css"
import Verified from "@material-ui/icons/CheckCircleOutlined"

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__avatar" src={image} />
            <div className="channelRow__text">
                <h4>{channel}{verified && <Verified />}</h4>
                <p>{subs} Subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
