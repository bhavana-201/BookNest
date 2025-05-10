function App(){
  return(
    <>
      <div className="cont1">
              <div className="nav"> 
                  <div className="title">BookNest</div>
                  <div className ="links">
                      <ul className="l">
                          <li className="rl">Home</li>
                          <li className="rl">Library</li>
                          <li className="rl">Login</li>
                          <li className="rl">Join now</li>
                          <li className="rl">Profile</li> 
                      </ul>
                  </div>
              </div>
              <div className="hero-section">
                  <h1 className="tagline">Track.<br/>Discover.<br/>Read.</h1>
                  <button id="get-started-btn">Get Started</button>
              </div>
          </div>
          <div className="cont2">
              <div className="feature1">
                  <div className="library">Library</div>
                  <div className="lib-desc"> Your digital nook where your entire reading world lives. Track every book you own, log what you’ve read, and build a curated To-Read list – all in one sleek, personalized library.</div>
              </div>
              <div className="feature2">
                  <div className="profile">Profile</div>
                  <div className="pro-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus ipsum et leo sodales, nec tempor elit convallis. Fusce eget convallis leo. Vestibulum sed gravida orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus tincidunt mauris a aliquam facilisis</div>
              </div>
              </div>
          <div className="cont3">
              <div className="quote">“The more that you read, the more things you will know. The more that you learn, the more places you'll go.”</div>
              <div className="author">― Dr. Seuss, I Can Read with My Eyes Shut!</div>
          
          </div>
          <div className="cont5">
              <footer>  &copy; 2025 BookNest. All rights reserved. </footer>
          </div>
          
    </>
  );
}


export default App;