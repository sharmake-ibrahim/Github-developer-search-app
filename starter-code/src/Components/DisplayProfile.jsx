import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";
import SearchIcon from "../assets/icon-search.svg";
import City from "../assets/icon-location.svg";
import Company from "../assets/icon-company.svg";
import Twitter from "../assets/icon-twitter.svg";
import Website from "../assets/icon-website.svg";
import {useState, useEffect} from "react";

const DisplayProfile = ()=> {
       const [isOpen, setIsOpen] = useState(false)
            const [userData, setUserData] = useState([]);
                const [input, setInput] = useState("")
                 const [getName, setName] = useState("")

    


    const handleClick = ()=> {
        setIsOpen(!isOpen)
    }

        const handleUserSearch = ()=> {
            getData(input); 
            setInput("")
        }

        const handleInput = (e)=> {
            setInput(e.target.value);
           
         }


    async function getData(name) {
        const res = await fetch(`https://api.github.com/users/${name}`);
        const data = await res.json();
        console.log("One the of the developer that use github", data)
        setUserData(data)
      }
    
      
   useEffect( ()=> {
        getData("duraanali");
        
      },[])


      console.log("stata data", userData);


      const date = new Date(userData.created_at);
         const dateString= date.toLocaleDateString();

         

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
                    <input type="text"
                        placeholder="search GitHub username"
                            value={input}
                                onChange={handleInput}
                     />
                </div>
                <button onClick={handleUserSearch}>Search</button>
            </div>

            <div className="profile-section">
                <div className="profile-info">
                    <img src= {userData.avatar_url} alt= "" />
                    <div className="split">
                        <div className="div-1">
                            <h1>{userData.name}</h1>
                            <span> {`@${userData.login}`}</span>
                        </div>
                        <div className="div-2">
                            <p>{`Joinded ${dateString}`}</p>
                        </div>
                    </div>
                </div>

                <p className="bio">
                   {userData.bio}
                </p>

                <div className="social-media-activities">
                        <ul>
                            <li>Repos</li>
                            <strong>{userData.public_repos}</strong>
                        </ul>
                        <ul>
                            <li>Followers</li>
                            <strong> {userData.followers}</strong>
                        </ul>
                        <ul>
                            <li>Following</li>
                            <strong>{userData.following}</strong>
                        </ul>
            </div>

                <div className="more-info">
                    <div className="icon">
                    <img src= {City} alt="location icon" />
                        {
                            userData.location == null ? <span>Not a Available</span> : <span>{userData.location}</span>
                        }
                    </div>
                    <div className="icon">
                        <img src= {Website} alt="website icon" />
                        
                        {
                            userData.blog == null ? <span>Not a Avaible</span> : <a href= {userData.blog} target="_blank">{userData.blog}</a>
                        }
                    </div>
                    <div className="icon">
                        <img src= {Twitter} alt=" twitter icon" />
                        {
                            userData.twitter_username == null ? <span>Not Availabe</span> : <span>{userData.twitter_username}</span>
                         }
                    </div>
                    <div className="icon">
                    <img src= {Company} alt=" company icon" />
                         {
                            userData.Company == null ? <span>Not Availabe</span> : <span>{userData.Company}</span>
                         }
                    </div>
                </div>

            </div>

         
        </section>

        </div>
    )
}

export default DisplayProfile;