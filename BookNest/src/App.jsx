import Features from "./Features";
import { Link } from "react-router-dom";

function App(){
  return(
    <>
        <div className="cont1">
              <div className="nav"> 
                  <div className="title">BookNest</div>
                  <div className ="links">
                      <ul className="l">
                          <li className="rl">Home</li>
                          <li className="rl"><Link to="login">Login/Signup</Link></li>

                      </ul>
                  </div>
              </div>
              <div className="hero-section">
                  <h1 className="tagline">Track.<br/>Discover.<br/>Read.</h1>
                  
              </div>
        </div>
        <section className="features-section"><Features/>
        </section>
              
          <div className="cont5">
              <footer>  &copy; 2025 BookNest. All rights reserved. </footer>
          </div>
          
    </>
  );
}


export default App;