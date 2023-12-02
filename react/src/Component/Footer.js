import React, { } from 'react'



function Footer() {

    const navbarStyle = {
        backgroundColor: "#007BFF", // Change this to your desired background color
      };
    
      const navLinkStyle = {
        color: "white", // Change this to your desired text color
      };
  return (

    <React.Fragment>

        <footer className="bg-primary fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-3"  style={navLinkStyle}>
                        <p>Cairacoders</p>
                    </div>
                </div>
            </div>
        </footer>

    </React.Fragment>
    
  );
}


export default Footer;
