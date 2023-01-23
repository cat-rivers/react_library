import React from "react";

const Home = () => {
    return (
        <div>
            <div className="navbar">
                <navmenu>
                    <navlink to="home" active style>Home</navlink>
                    <navlink to="search" active style>Search</navlink>
                    <navlink to="signup" active style>Signup</navlink>
                    <navlink to="login" active style>Login</navlink>
                </navmenu>
            </div>
            <div className="body">
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
                <img src="https://reactjs.org/logo-og.png" alt="React Image" />
            </div>
        </div>
    )
}
  

export default Home;
 