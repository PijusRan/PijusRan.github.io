import React from "react"
import Instagram from "../Icons/Instagram.svg"
import Github from "../Icons/Github.svg"
import Youtube from "../Icons/Youtube.png"

export default function Footer(){
    return(
        <div className="Footer">
            <a href="https://github.com/pijusr"><img src={Github}/></a>
            <a href="https://www.instagram.com/frustedits/"><img src={Instagram}/></a>
            <a href="https://www.youtube.com/c/Frusticks"><img src={Youtube}/></a>
        </div>
    )
}