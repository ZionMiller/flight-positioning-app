import React from 'react'

const LandingPage = () => {
  return (
    <>
    <h2>Click Below to Search for Cheap Flights</h2>
        <>.....</>
        <h3>Welcome to our App </h3>
        <h3>Meet Our Developers</h3>
        <div className="Container">
           <div className="card">
               <p>
                   {/* <img className="AboutPicture" id="Zion" src={require()} alt="Zion"/> <br/> */}
                   Zion Miller: <a href="https://github.com/ZionMiller">GitHub</a> - {''}
                   <a href="https://www.linkedin.com/in/zion-miller-b15344170/">LinkedIn</a>
               </p>
           </div>
           <div className="card">
               <p>
                   {/* <img className="AboutPicture" id="Kevin" src={require()} alt="Kevin"/> <br/> */}
                   Kevin Gicheha: <a href="https://github.com/kgicheha">GitHub</a> - {''}
                   <a href="https://www.linkedin.com/in/kevin-gicheha/">LinkedIn</a>         
               </p>
           </div>
           <div className="card">
               <p>
                   {/* <img className="AboutPicture" id="Justin" src={require()} alt="Justin"/> <br/> */}
                   Justin Myers: <a href="https://github.com/jlmyers14">GitHub</a> - {''}
                   <a href="https://www.linkedin.com/in/justin-leroux-myers">LinkedIn</a>
               </p>
           </div>
       </div>
    </>
  )
}

export default LandingPage