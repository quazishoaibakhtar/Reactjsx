import "bulma/css/bulma.css"
// import './App.css';
import Compo from './Compo';
import img1 from "./images/alexa.png"
import img2 from "./images/cortana.png"
import img3 from "./images/siri.png"

function App() {

  // let cool = 'hellow'
  // if (Math.random > 0.5) {
  //   cool = 'Bye Bye'
  // }
  return (
    <div>
      {/* <h1>{cool}</h1>
     <h2>{new Date().toLocaleTimeString()}</h2> */}
     <section class="hero is-link">
  <div class="hero-body">
    <p class="title">
    Personal Digital Assistant
    </p>
    
  </div>
</section>
     
    

     <div className="container">
      <section className="section">
      <div className="columns">
  <div className="column is-3.5">
  <Compo title="Alexa"  handle="@alexa99" image={img1} description= "Alexa is AI of Google"/>
  </div>
  <div className="column is-3.5">
  <Compo title="Cortana" handle="@cortana32" image={img2} description= "Cortana is AI of Microsoft"/> 
  </div>
  <div className="column is-3.5">
  <Compo title="Siri" handle="@siri01" image={img3} description= "Siri is AI of Apple"/> 
  </div>
  


      </div>
      </section>
     </div>
     
     

      
      
</div>
   
  );
}

export default App;
