import "./App.css";

function App() {
  /* const blueOnPage = "#3A798B"
  const greyOnPage = "#333333"
  const lightGrey = #E6E6E6
   */

  return (
    <div className="App">
      <div className="paper">
        <div className="topDiv">
          <div className="topDivLeft">
            <h2>Christian Loui Elsang Nielsen</h2>
          </div>
          <div className="topDivRight">
            <p>Programmør</p>
            <p
              style={{
                borderTop: "1px #ABD8DD solid",
                borderBottom: "1px #ABD8DD solid",
                padding: ".4em 1.5em",
              }}
            >
              Frontend
            </p>
            <p>Udvikler</p>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ flex: "1", backgroundColor: "#3A798B" }}>
            <h3 style={{ marginLeft: "1em" }}>Kompetancer</h3>
          </div>
          <div style={{ flex: "1", backgroundColor: "#333" }}>
            <h3 style={{ paddingLeft: "1.5em" }}>Kontakt</h3>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "0.8em" }}>
          <div className="info" style={{ flex: "1" }}>
            <p style={{ marginLeft: "2.5em" }}>
              Jeg er handlings orienteret, rationel med et rolig sind, jeg kan
              have flere bolde i luften, ser tit ting fra forskellige vinkler.
              Jeg har en motivation i at lære nye ting inden for IT, lytter
              gerne til andres meninger i forhold til opgaveløsninger. Jeg
              sætter stor pris på teamspirit og er samarbejdsvillig. Kan modtage
              kritik uden at tage det personligt. Jeg ser fordelen i at
              acceptere andres ideer og erfaring, da jeg med min unge alder ser
              muligheder i at modtage input.
            </p>
          </div>
          <div
            style={{ flex: 1, backgroundColor: "#E6E6E6", paddingTop: ".5em" }}
            className="contactInfo"
          >
            <div style={{ marginLeft: "2em" }}>
              {" "}
              <i class="fa-solid fa-phone"></i>{" "}
              <a href="tel:25771403">25 77 14 03</a>
            </div>
            <div
              style={{
                marginLeft: "2em",
                display: "flex",
                alignItems: "center",
                marginTop: ".4em",
              }}
            >
              <i class="fa-solid fa-house"></i>
              <p style={{ marginLeft: "3px" }}>
                Munkholmvej 389, 4060 Kirke Såby
              </p>
            </div>
            <div style={{ marginLeft: "2em" }}>
              <i class="fa-solid fa-envelope"></i>{" "}
              <a href="mailto:chrnielsen2003@gmail.com">
                chrnielsen2003@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ flex: "1", backgroundColor: "#3A798B" }}>
            <h3 style={{ marginLeft: "1em" }}>Erfaring</h3>
          </div>
          <div style={{ flex: "1", backgroundColor: "#333" }}>
            <h3 style={{ marginLeft: "1.5em" }}>Kvalifikationer</h3>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div className="erfaring" style={{ lineHeight: "3px", flex: "1" }}>
            <div>
              <p style={{ fontSize: ".8em", marginLeft: "1.3em" }}>
                <strong>Føtex</strong>
              </p>
              <p style={{ color: "#3A798B", marginLeft: "2em" }}>2019 -</p>
              <br />
              <p style={{ marginLeft: "2em" }}>Kundeservice</p>
              <p style={{ marginLeft: "2em" }}>Kassse medarbejder</p>
              <p style={{ marginLeft: "2em" }}>Lukke medansvarlig</p>
              <p style={{ marginLeft: "2em" }}>Elektronik ansvarlig</p>
              <hr style={{ margin: "0 1em", color: "#3A798B" }} />
            </div>
            <div>
              <p style={{ fontSize: ".8em", marginLeft: "1.3em" }}>
                <strong>Fritid</strong>
              </p>
              <br />
              <p style={{ marginLeft: "2em" }}>Venner</p>
              <p style={{ marginLeft: "2em" }}>El bil</p>
              <p style={{ marginLeft: "2em" }}>Fifa</p>
              <p style={{ marginLeft: "2em" }}>
                Fodbold tosse og stolt Spurs supporter
              </p>
              <hr style={{ margin: "0 1em", color: "#3A798B" }} />
            </div>
          </div>
          <div
            style={{ backgroundColor: "#E6E6E6", color: "#3A798B", flex: "1" }}
            className="kval"
          >
            <ul>
              <li>Kundeservice</li>
              <li>Frontend udvikling</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>NaxtJs</li>
              <li>Sass</li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1" }}>
            <br />
          </div>
          <div style={{ backgroundColor: "#333", flex: "1" }}>
            <h3 style={{ marginLeft: "1.5em" }}>Uddannelse</h3>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1", width: "200px" }} className="imgDiv">
            <img
              style={{ width: "200px", marginLeft: "1em" }}
              src="/imgAfMig.jpg"
              alt="placeholder"
            />
          </div>
          <div style={{ flex: "1", lineHeight: "4px", paddingTop: "1em" }}>
            <p style={{ marginLeft: "2.5em", fontSize: ".8em" }}>
              <strong>Web udvikler</strong>
            </p>
            <p style={{ marginLeft: "3.5em" }}>2019 - 2021</p>
            <p style={{ marginLeft: "3.5em" }}>Roskilde Tekniske Skole</p>
            <hr style={{ margin: "0 2em" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
