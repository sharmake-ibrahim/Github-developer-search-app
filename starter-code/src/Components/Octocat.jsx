import React, {useState, useEffect} from "react";

const Octocat = ()=> {
    const [octocatInfo , setOctocat] = useState([])
    const OctocatData = async ()=> {
        const res = await fetch("https://api.github.com/users/octocat");
            const data = await res.json();
        setOctocat(data);
 }

 useEffect( ()=> {
    OctocatData();
  },[])

  const date = new Date(octocatInfo.created_at);
  const dateString= date.toLocaleDateString();

    return(
        <div className="profile-section">
        <div className="profile-info">
            <img src= {octocatInfo.avatar_url} alt= "" />
            <div className="split">
                <div className="div-1">
                    <h1>{octocatInfo.name}</h1>
                    <span> {`@${octocatInfo.login}`}</span>
                </div>
                <div className="div-2">
                    <p>{`Joinded ${dateString}`}</p>
                </div>
            </div>
        </div>

        {  <p className="bio">
                    {octocatInfo.bio}
                    </p>  &&  <p className="bio">
                        This profile has no bio
                    </p>}

        <div className="social-media-activities">
                <ul>
                    <li>Repos</li>
                    <strong>{octocatInfo.public_repos}</strong>
                </ul>
                <ul>
                    <li>Followers</li>
                    <strong> {octocatInfo.followers}</strong>
                </ul>
                <ul>
                    <li>Following</li>
                    <strong>{octocatInfo.following}</strong>
                </ul>
      </div>

        <div className="more-info">
            <div className="icon">
            <img src= {City} alt="location icon" />
                {
                    octocatInfo.location == null ? <span>Not a Available</span> : <span>{octocatInfo.location}</span>
                }
            </div>
            <div className="icon">
                <img src= {Website} alt="website icon" />
                
                {
                    octocatInfo.blog == null ? <span>Not a Avaible</span> : <a href= {octocatInfo.blog} target="_blank">{octocatInfo.blog}</a>
                }
            </div>
            <div className="icon">
                <img src= {Twitter} alt=" twitter icon" />
                {
                    octocatInfo.twitter_username == null ? <span>Not Availabe</span> : <span>{octocatInfo.twitter_username}</span>
                 }
            </div>
            <div className="icon">
            <img src= {Company} alt=" company icon" />
                 {
                    octocatInfo.Company == null ? <span>Not Availabe</span> : <span>{octocatInfo.Company}</span>
                 }
            </div>
        </div>

    </div>
    )
}


export default Octocat;