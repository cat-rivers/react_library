import React from "react";
import "./Home.css";


const Home = () => {
    return (
        <div>
            <div className="navbar">    
                <div className="menuitem">Home &nbsp; &nbsp;</div>
                <div className="menuitem">Search &nbsp; &nbsp;</div> 
                <div className="menuitem">Signup &nbsp; &nbsp;</div> 
                <div className="menuitem">Login &nbsp; &nbsp;</div> 
            </div>
            <div className="bodyContainer">
                <h2> Library </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc accumsan in odio dapibus elementum. Nulla lectus purus, 
                    tincidunt sit amet hendrerit id, dictum eu nunc. In aliquam 
                    volutpat est, sit amet dapibus orci viverra vitae. Integer 
                    eget dapibus justo. Mauris vehicula elementum libero, quis 
                    mattis tortor rutrum eu. Sed interdum, urna nec bibendum euismod, 
                    neque justo tincidunt purus, eu egestas massa turpis at arcu.
                </p>
            </div>
            <div className="footer">
                <img src={require("./book.png")} alt="Book image" />
            </div>
        </div>
    )
}
  

export default Home;
 