import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Fade } from 'react-bootstrap';



function App() {
  return (
  <div className="App container ">
  

<FadeIn><div className='black'></div></FadeIn>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Aboutpage/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/portfolio" element={<PortfolioGallery/>} />

      </Routes>
    </BrowserRouter>
        <Header/>
        
       
       
    </div>
  );
}

function Header(){
  return(
    <div className='header sticky'>
     
      <h1>Sarah So</h1>
      <ul className='ul-display'>
      <li>
      <a href="/portfolio"><i class="fa-solid fa-book fa-2xs"></i> My Portfolio</a>

      </li>
      <li>
      <a href="https://github.com/ssarahs-lab" target="_blank"><i class="fa-brands fa-github fa-2xs"></i> My Github</a>
      </li>
        
      <li>
      <a href="/about"><i class="fa-solid fa-user fa-2xs"></i>  About me</a>
      </li>

      <li>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mrs.sarahso@gmail.com" target="_blank"><i class="fa-solid fa-envelope fa-xs"></i> Contact me (<i class="fa-brands fa-google fa-xs"></i>)</a>
      </li>
      
      <li>
      <a href="mailto:mrs.sarahso@gmail.com" ><i className="fa-solid fa-envelope fa-xs"></i> Contact me</a>
      </li>

      </ul>

    </div>
  )
  
}

function PortfolioGallery() {
  return ( 
    <FadeIn transitionDuration="1000" delay="100">
    <div className='row content'>
    
      <div className="column">

        <a href="https://chatto-robotto.herokuapp.com/" target="_blank">
      <img
          className="d-block w-80 App-img"
          src={require('./images/chattoroboto.gif')}
          alt="First slide"
        />

      </a>
      <a href="https://habitmakr.herokuapp.com/" target="_blank">
        <img
          className="d-block w-80 App-img"
          src={require('./images/habitmakr_landing.gif')}
          alt="Second slide"
        />

      </a>

      <a href="https://hidden-tundra-11775.herokuapp.com/" target="_blank">
        <img
          className="d-block w-80 App-img"
          src={require('./images/moodtracker_graph.gif')}
          alt="Third slide"
        />
        </a>
        <a href=" https://ssarahs-lab.github.io/project1-wordle/" target="_blank">

       
        <img
        className="d-block w-80 App-img"
        src={require('./images/wordlescreenshot.png')}
        alt="Second slide"
        />

        </a>  
      </div>

      <div className="column">
      
      <a href="https://habitmakr.herokuapp.com/" target="_blank">
        <img
          className="d-block w-80 App-img"
          src={require('./images/habitmakr_landing.gif')}
          alt="Second slide"
        />

      </a>
      <a href="https://hidden-tundra-11775.herokuapp.com/" target="_blank">
        <img
          className="d-block w-80 App-img"
          src={require('./images/moodtracker_graph.gif')}
          alt="Third slide"
        />
        </a>
        <a href=" https://ssarahs-lab.github.io/project1-wordle/" target="_blank">

       
          <img
          className="d-block w-80 App-img"
          src={require('./images/wordlescreenshot.png')}
          alt="Second slide"
          />

          </a>  
         <a href="https://chatto-robotto.herokuapp.com/" target="_blank">
      <img
          className="d-block w-80 App-img"
          src={require('./images/chattoroboto.gif')}
          alt="First slide"
        />

      </a>
      </div>
      
      <div className="column">

        
      <a href="https://chatto-robotto.herokuapp.com/" target="_blank">
      <img
          className="d-block w-80 App-img"
          src={require('./images/chattoroboto.gif')}
          alt="First slide"
        />

      </a>

      <a href="https://habitmakr.herokuapp.com/" target="_blank">
        <img
          className="d-block w-80 App-img"
          src={require('./images/habitmakr_landing.gif')}
          alt="Second slide"
        />

      </a>
      <a href="https://hidden-tundra-11775.herokuapp.com/" target="_blank">
        <img
          className="d-block w-80 App-img"
          src={require('./images/moodtracker_graph.gif')}
          alt="Third slide"
        />
        </a>

        <a href=" https://ssarahs-lab.github.io/project1-wordle/" target="_blank">

       
         <img
          className="d-block w-80 App-img"
          src={require('./images/wordlescreenshot.png')}
          alt="Second slide"
        />

        </a>  
        
        
      </div>

      {/* <div className="column">
      <img
          className="d-block w-80 App-img"
          src={require('./images/chattoroboto.gif')}
          alt="First slide"
        />
        <img
          className="d-block w-80 App-img"
          src={require('./images/habitmakr_landing.gif')}
          alt="Second slide"
        />
        <img
          className="d-block w-80 App-img"
          src={require('./images/moodtracker_graph.gif')}
          alt="Third slide"
        />
         <img
          className="d-block w-80 App-img"
          src={require('./images/wordlescreenshot.png')}
          alt="Second slide"
        />
      </div> */}



  </div>
  </FadeIn>
)
}



function Portfolio(){
  return(
    <div className='portfolio'>
      <img
          className="d-block w-80 App-img"
          src={require('./images/chattoroboto.gif')}
          alt="First slide"
        />
        <img
          className="d-block w-80 App-img"
          src={require('./images/habitmakr_landing.gif')}
          alt="Second slide"
        />
        <img
          className="d-block w-80 App-img"
          src={require('./images/moodtracker_graph.gif')}
          alt="Third slide"
        />
         <img
          className="d-block w-80 App-img"
          src={require('./images/wordlescreenshot.png')}
          alt="Second slide"
        />
    </div>
  )
}



function WelcomePage () {
  return ( 
  
  <div>
   
    <div className="typewriter">
      
    </div>
  </div>  );
}

function Aboutpage(){
  return(
    <FadeIn transitionDuration="1000" delay="100">
  <div className='about-container content'>

    <img className='about-image' src="https://sdk.bitmoji.com/render/panel/f84125e2-0b34-45fb-b2f0-7930ef37ac40-a67a5928-5bce-45a1-8107-550a84a2d2e3-v1.png?transparent=1&palette=1"></img>
    <h1 data-testid="heading">Hi there,</h1>
    <h2>I'm Sarah!</h2>
    
    <p>I'm a full stack developer that began my coding journey pretending HTML and CSS was coding in 2018, before diving into General Assembly's Software Engineering Immersive in early 2022. </p>

<p>Now I can Google even more proficiently as I dive deep and deeper into this journey of learning new skills and making fun things while I'm at it. </p>

<p> Welcome to my page. </p><p>(Probably should've said this earlier. Woops.) </p>

<img className='about-image-two' src="https://sdk.bitmoji.com/render/panel/5e845383-93bc-40c1-bdde-3574c1b7c810-a67a5928-5bce-45a1-8107-550a84a2d2e3-v1.png?transparent=1&palette=1
"></img>

<p>If you feel like writing me a message, send me an email via the link above. </p><p>

Unless your name is Saura. I'm onto you Saura.</p>


  
              
  </div>
  </FadeIn>)
}


export default App;
