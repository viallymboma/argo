// import logo from './logo.svg';
// import './App.css';
import './assets/css/style.css';
import { CloseOutline, WomanOutline } from 'react-ionicons';

function App() {

  const closeFormCard = () => {

  }

  return (
    <section className="MainStyle">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>

      <div className="OverAllFormContainer">

        <div className="HeaderContainer">
          <div className="left"></div>
          <div className="right">
            <CloseOutline onClick={closeFormCard ()} className="CloseOutline" color="#d45d5d" size={100} />
          </div>
        </div>

        <div className="FormBodyContainer">
          <h2> Formulaire  </h2>
          <form className="register_form">
            
            <div className="namesContainer positionTHem">
              <div className="inputBox">
                <input className="sameInput" type="text" id="firstnameID" placeHolder="Prenom" />
              </div>
              <div className="inputBox">
                <input className="sameInput" type="text" id="lastnameID" placeHolder="Nom" />
              </div>
              <div className="inputBox span">
                <span>Date Naissance</span>
                <input className="sameInput" type="date" id="dobID" placeHolder="Date de naissance" />
              </div>
            </div>

            <br />

            <div className="sizeContainer positionTHem">
              <div className="inputBox">
                <input className="sameInput" type="number" id="heightID" placeHolder="Taille en metre" />
              </div>
              <div className="inputBox">
                <input className="sameInput" type="number" id="weightID" placeHolder="Poid en Kg" />
              </div>
            </div>

            <br />

            <div className="nativeContainer positionTHem">
              <div className="inputBox">
                <input className="sameInput" type="text" id="originID" placeHolder="Il/elle vient d'ou" />
              </div>
              <div className="inputBox">
                <input className="sameInput" type="text" id="languageID" placeHolder="Langue maternelle" />
              </div>
            </div>

            <br />

            <div className="professionContainer positionTHem">
              <div className="inputBox">
                <input className="sameInput" type="text" id="skillID" placeHolder="Competance" />
              </div>
              <div className="inputBox">
                <input className="sameInput" type="number" id="firstSailDateID" placeHolder="Quand etait-ce la premiere fois " />
              </div>
            </div>

            <div className="genderContainer positionTHem">
              <div className="inputBox">
                <input type="checkbox" className="maleCheck" placeHolder="Nom" /> Homme
              </div>
              <div className="inputBox">
                <input type="checkbox" className="femaleCheck" placeHolder="Nom" /> Femme?
              </div>
            </div>

            <div className="inputBox inputBoxM">
              <input type="checkbox" id="maritalStatusID" placeHolder="Competance" /> Married?
            </div>

            <div className="inputBox span salarySpan">
              <input className="sameInput" type="number" id="salaryID" placeHolder="Salaire" />
            </div>

            <div className="inputBox inputBoxBtn">
              <input type="submit" className="ButtonStyle" value="Enregistrer" />
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

export default App;
