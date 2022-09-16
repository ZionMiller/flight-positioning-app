import React from 'react'

const LandingPage = () => {
  return (
    <>
    <h1><div id = "logo">
    <img src={require("../Assets/logo.jpg")} alt="Logo" height="200"/>
    </div></h1>
        <h2>Log In or Sign Up to Begin Searching for Cheap Flights!</h2>
        <p>Welcome to our app! Our goal with this project is to help anyone get anywhere in the United States for the 
            cheapest price possible. When traveling it can be such a hassle finding the right date(s) and lowest price
            for your travels. With this app, we hope to cut out some of that headache for the consumer by doing the travel 
            searching for them based off the dates that are selected. Then our app presents the user with multiple options of 
            various routes and prices to choose from for their travel needs. We hope you enjoy using it!</p>
        <h3>Meet Our Developers</h3>
        <div className="Container">
           <div className="card">
               <p>
                   <img className="AboutPicture" id="Zion" src={require("../Assets/zion.jpg")} alt="Zion"/> <br/>
                   Zion Miller: <a href="https://github.com/ZionMiller">GitHub</a> - {''}
                   <a href="https://www.linkedin.com/in/zion-miller-b15344170/">LinkedIn</a>
               </p>
           </div>
           <div className="card">
               <p>
                   <img className="AboutPicture" id="Kevin" src={require("../Assets/Kevin.jpeg")} alt="Kevin"/> <br/>
                   Kevin Gicheha: <a href="https://github.com/kgicheha">GitHub</a> - {''}
                   <a href="https://www.linkedin.com/in/kevin-gicheha/">LinkedIn</a>         
               </p>
           </div>
           <div className="card">
               <p>
                   <img className="AboutPicture" id="Justin" src={require("../Assets/Justin.jpeg")} alt="Justin"/> <br/>
                   Justin Myers: <a href="https://github.com/jlmyers14">GitHub</a> - {''}
                   <a href="https://www.linkedin.com/in/justin-leroux-myers">LinkedIn</a>
               </p>
           </div>
       </div>
    </>
  )
}

export default LandingPage