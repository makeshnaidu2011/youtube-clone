import React from 'react'
import "./SearchPage.css"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"

import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined"
function SearchPage() {
    return (
        <div className="searchPage">

            <div className="searchPage__filter">
                <TuneOutLinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow image="https://yt3.ggpht.com/a/AATXAJza8_J5J3HyyQJKuWeFAqzNx73g53S574XS2nxN2w=s176-c-k-c0x00ffffff-no-rj-mo" channel="Corridor crew"
                verified subs="300k"
                noOfVideos="100"
                description=" Hustler" />
            <hr />
            <VideoRow subs="1 M"
                title="VFX artist react to Bollywood great and BAD CGI"
                image="https://i.ytimg.com/an_webp/u9det4mfNVk/mqdefault_6s.webp?du=3000&sqp=CM-3vfoF&rs=AOn4CLD8i8rWtnwJ0NfKKLSTumuWZhe3VA"
                views="100k"
                description="some Random long test sentenxe"
                channel="Corridor crew"
                timestamp="5 days ago"
            />
        </div>

    )
}

export default SearchPage
