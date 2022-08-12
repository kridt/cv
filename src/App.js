
import './App.css';

function App() {

  /* const blueOnPage = "#3A798B"
  const greyOnPage = "#333333"
  const lightGrey = #E6E6E6
   */

  return (
    <div className="App">
      <div className='paper'>
        <div className='topDiv'>
            <div className='topDivLeft' >
                <h2>Christian Loui Elsang Nielsen</h2>
            </div>
            <div className='topDivRight'>
              <p>Programmør</p>
              <p style={{
                borderTop: "1px #ABD8DD solid",
                borderBottom: "1px #ABD8DD solid",
                padding: ".4em 1.5em"
              }}>Frontend</p>
              <p>Udvikler</p>

            </div>
            </div>  

              <div style={{display:"flex"}}>
                <div style={{flex: "1", backgroundColor: "#3A798B"}}>
                  <h3 style={{marginLeft:"1em"}}>Kompetancer</h3>
                </div>
                <div style={{flex: "1", backgroundColor:"#333"}}>
                  <h3 style={{paddingLeft: "1.5em"}}>Kontakt</h3>
                </div>
              </div>

              <div style={{ display:"flex", fontSize: "0.8em" }}>
                <div className='info' style={{flex: "1"}}>
                  <p style={{marginLeft:"2.5em"}}>Jeg er handlings orienteret, rationel med et rolig sind, jeg
kan have flere bolde i luften, ser tit ting fra forskellige
vinkler. Jeg har en motivation i at lære nye ting inden for
IT, lytter gerne til andres meninger i forhold til
opgaveløsninger. Jeg sætter stor pris på teamspirit og er
samarbejdsvillig. Kan modtage kritik uden at tage det
personligt. Jeg ser fordelen i at acceptere andres ideer og
erfaring, da jeg med min unge alder ser muligheder i at
modtage input.</p>
                </div>
                <div style={{flex: 1, backgroundColor: "#E6E6E6", paddingTop:".5em"}} className='contactInfo'>
                  <div style={{ marginLeft:"2em" }}> <i class="fa-solid fa-phone"></i> <a href='tel:25771403'>25 77 14 03</a></div>
                  <div style={{ marginLeft:"2em", display:"flex", alignItems:"center", marginTop:".4em" }}><i class="fa-solid fa-house"></i><p style={{marginLeft:"3px"}}>Munkholmvej 389, 4060 Kirke Såby</p></div>
                  <div style={{ marginLeft:"2em" }}><i class="fa-solid fa-envelope"></i> <a href='mailto:chrnielsen2003@gmail.com'>chrnielsen2003@gmail.com</a></div>
                </div>
              </div>

      </div>
    </div>
  );
}

export default App;
