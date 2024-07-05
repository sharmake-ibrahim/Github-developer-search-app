import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";
import SearchIcon from "../assets/icon-search.svg";
import City from "../assets/icon-location.svg";
import Company from "../assets/icon-company.svg";
import Twitter from "../assets/icon-twitter.svg";
import Website from "../assets/icon-website.svg";
import {useState} from "react";
const DisplayProfile = ()=> {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = ()=> {
        setIsOpen(!isOpen)
    }
    return(

    <div className="container">
        <section>
            <header>
                <h1>Devfinder</h1>
                <nav> 
                    <div className= { `light-mode  ${ isOpen ? "hide" : ""}`}>
                        <strong>LIGHT</strong>  
                        <img src= {Sun} alt="Moon Icon"  onClick={handleClick} /> 
                        </div> 
                    <div className= {`dark-mode " ${ isOpen ? "show" : "hide"}`}>
                        <strong>DARK</strong>  
                        <img src= {Moon} alt="Moon Icon"  onClick={handleClick}/> 
                        </div> 
                </nav>
            </header>
            <div className="search-container">
                <div className="flex">
                <img src= {SearchIcon} alt="search icon" />
                    <input type="text" placeholder="search GitHub username"/>
                    <button>Search</button>
                </div>
            </div>

            <div className="profile-section">
                <div className="profile-info">
                    <img src="https://www.nicepng.com/png/detail/183-1838159_exploring-github-github-octocat.png" alt="" />
                    <div className="split">
                        <div className="div-1">
                            <h1>The Octocat</h1>
                            <span>@octocat</span>
                        </div>
                        <div className="div-2">
                            <p>Joined 25 Jan 2011</p>
                        </div>
                    </div>
                </div>

                <p className="bio">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis recusandae earum est qui illo ipsa? Tempore consequatur omnis doloribus?
                </p>

                <div className="social-media-activities">
                        <ul>
                            <li>Repos</li>
                            <strong>8</strong>
                        </ul>
                        <ul>
                            <li>Followers</li>
                            <strong>3938</strong>
                        </ul>
                        <ul>
                            <li>Following</li>
                            <strong>9</strong>
                        </ul>
            </div>

                <div className="more-info">
                    <div className="icon">
                    <img src= {City} alt="location icon" />
                        <span> San Francisco</span>
                    </div>
                    <div className="icon">
                        <img src= {Website} alt="website icon" />
                        <a href="#" target="_blank">sharmake-ibrahim.com</a>
                    </div>
                    <div className="icon">
                        <img src= {Twitter} alt=" twitter icon" />
                        <span> Not Available</span>
                    </div>
                    <div className="icon">
                    <img src= {Company} alt=" company icon" />
                        <span>@github</span>
                    </div>
                </div>

            </div>

         
        </section>

        </div>
    )
}

export default DisplayProfile;