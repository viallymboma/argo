// import logo from './logo.svg';
// import './App.css';
import './assets/css/style.css';
import { CloseOutline, AddOutline, WomanOutline } from 'react-ionicons';
import Button, { DeleButton, UpdateButton } from './components/Button';
import { useContext, useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import store from '../src/components/stores'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSailors } from './actions/sailors'
import GlobalProvider, { GlobalContext } from './context/GlobalContext'
import { publicRequest } from './utilities/requestMetho';
import Sailors from './components/Sailors';

function App() {

  const [toggleShowCard, setToggleShowCard] = useState(false);
  const [enteredName, setEnteredName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredDateOfBirth, setEnteredDateOfBirth] = useState('');
  const [enteredHeight, setEnteredHeight] = useState('');
  const [enteredWeight, setEnteredWeight] = useState('');
  const [enteredOrigin, setEnteredOrigin] = useState('');
  const [enteredLanguage, setEnteredLanguage] = useState('');
  const [enteredSkill, setEnteredSkill] = useState('');
  const [enteredExperience, setEnteredExperience] = useState('');

  const [enteredGender, setEnteredGender] = useState('');
  const [enteredMaritalStatus, setEnteredMaritalStatus] = useState(false);
  const [enteredSalary, setEnteredSalary] = useState('');

  const [toggleGenderMale, setToggleGenderMale] = useState(false);
  const [toggleGenderFemale, setToggleGenderFemale] = useState(false);
  const [toggleMaritalStatus, setToggleMaritalStatus] = useState(false);
  // Working with form
  // I can work eather with event target value
  // or with useRef 

  // useEffect (() => {
    
  // }, [])

  // const { addSailor } = useContext(GlobalContext);
  // const { sailors, getSailors } = useContext(GlobalContext);


  const [ reloadTable, setReloadTable ] = useState(0)
  const [ sailors, setSailor ] = useState([])

  // useEffect(() => {
  //   getSailors();
  //   console.log(getSailors())
  //   // eslint-di-able-next-line react-hooks/exhaustive-deps
  // }, [])

  const makeReloadT = () => {
    setReloadTable(reloadTable + 1)
  }

  useEffect(() => {
    console.log("Sailor will be shown below: ")
    // console.log(filters)
    const getSailors = async () => {

        try {
            const res = await publicRequest.get("/matello");
            console.log("the data ", res)
            // feeding my meal state with data from database
            setSailor(res.data)
            console.log(res.data)
            console.log(sailors)
        } catch (err) {
            console.log("Here is the error: ", err)
        }
    };

    getSailors ();
    // increaseLoadNumber ();
  }, [reloadTable])


  const toggleMaleHandler = (event) => {
    let genderState = ""
    setToggleGenderMale(!toggleGenderMale)
    if (toggleGenderMale === false) {
      genderState = "Female"
    } else {
      genderState = "Male"
    }
    console.log(genderState)
    setEnteredGender(event.target.value)
  }

  // console.log(sailors)

  const toggleFemaleHandler = (event) => {
    let genderState = ""
    setToggleGenderFemale(!toggleGenderFemale)

    if (toggleGenderMale === false) {
      genderState = "Male"
    } else {
      genderState = "Female"
    }
    console.log(genderState)
    setEnteredGender(event.target.value)
  }

  const toggleMaritalStatusHandler = () => {
    setToggleMaritalStatus(!toggleMaritalStatus)
  }

  // --------------------------

  const firstnameInputCHangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const lastnameInputCHangeHandler = event => {
    setEnteredLastName(event.target.value)
  }

  const dobInputCHangeHandler = event => {
    setEnteredDateOfBirth(event.target.value)
  }

  const heightInputCHangeHandler = event => {
    setEnteredHeight(event.target.value)
  }

  const weightInputCHangeHandler = event => {
    setEnteredWeight(event.target.value)
  }

  const originInputCHangeHandler = event => {
    setEnteredOrigin(event.target.value)
  }

  const LanguageCHangeHandler = event => {
    setEnteredLanguage(event.target.value)
  }

  const skillInputCHangeHandler = event => {
    setEnteredSkill(event.target.value)
  }

  const experienceInputCHangeHandler = event => {
    setEnteredExperience(event.target.value)
  }

  const genderInputCHangeHandler = event => {
    setEnteredGender(event.target.value)
  }

  const maritalStatusInputCHangeHandler = event => {
    setEnteredMaritalStatus(event.target.value)
  }

  const salaryInputCHangeHandler = event => {
    setEnteredSalary(event.target.value)
  }

  console.log(enteredGender)
  const formSubmissionHandler = (event) => {
    // event.preventDefautl();
    event.preventDefault();
    // console.log(enteredName)
    // console.log(enteredLastName)
    // console.log(enteredDateOfBirth)
    // console.log(enteredHeight)
    // console.log(enteredWeight)
    // console.log(enteredOrigin)
    // console.log(enteredLanguage)
    // console.log(enteredSkill)
    // console.log(enteredExperience)
    // console.log(enteredGender)
    // console.log(enteredMaritalStatus)
    // console.log(enteredSalary)

    // console.log(toggleGenderMale)
    // console.log(toggleGenderFemale)
    // console.log(toggleMaritalStatus)

    const newSailor = {
      firstName: enteredName,
      lastName:  enteredLastName,
      dateOfBirth:  enteredDateOfBirth,
      // height:  enteredHeight,
      // weight:  enteredWeight,
      // origin:  enteredOrigin,
      // language:  enteredLanguage,
      // skill:  enteredSkill,
      // experience:  enteredExperience,
      // gender:  enteredGender,
      // maritalStatus:  enteredMaritalStatus,
      // // description: ,
      // salary:  enteredSalary
    }

    // addSailor(newSailor)
    const postSailors = async () => {

      try {
          const res = await publicRequest.post("/matello/", newSailor);
          console.log("the data ", res)
          // feeding my meal state with data from database
          setSailor(res.data)
          console.log(res.data)
          console.log(sailors)
      } catch (err) {
          console.log("Here is the error: ", err)
      }
    };

    postSailors ();

    makeReloadT()
    console.log(reloadTable)
    // setEnteredSalary(event.target.value)
  }


  const closeFormCard = () => {
    setToggleShowCard(!toggleShowCard)
  }

  const showFormCard = () => {
    setToggleShowCard(!toggleShowCard)
  }

  let formStyle = "hiddeForm"
  let backdropStyle = "backdropHide";

  if (toggleShowCard === true) {
    formStyle = "showFormNow"
    backdropStyle = "backdropShow"
  } else {
    formStyle = "hiddeForm"
    backdropStyle = "backdropHide"
  }



  
  return (
    // <Provider store={store}>
      <section className="MainStyle">
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>

        <div className={`OverAllFormContainer ${formStyle}`}>

          <div className="HeaderContainer">
            <div className="left"></div>
            <div className="right">
              <CloseOutline onClick={() => closeFormCard ()} className="CloseOutline" color="#d45d5d" size={100} />
            </div>
          </div>

          <div className="FormBodyContainer">
            <h2> Formulaire  </h2>
            <form className="register_form" onSubmit={ formSubmissionHandler }>
              
              <div className="namesContainer positionTHem">
                <div className="inputBox">
                  <span>Nom</span>
                  <input className="sameInput" onChange={ firstnameInputCHangeHandler } type="text" id="firstnameID" placeholder="Prenom" />
                </div>
                <div className="inputBox">
                  <span>Prenom</span>
                  <input className="sameInput" onChange={ lastnameInputCHangeHandler } type="text" id="lastnameID" placeholder="Nom" />
                </div>
                <div className="inputBox span">
                  <span>Date Naissance</span>
                  <input className="sameInput" onChange={  dobInputCHangeHandler } type="date" id="dobID" placeholder="Date de naissance" />
                </div>
              </div>

              <br />

              <div className="sizeContainer positionTHem">
                <div className="inputBox">
                  <span>Taille</span>
                  <input className="sameInput" onChange={ heightInputCHangeHandler } type="number" id="heightID" placeholder="Taille en metre" />
                </div>
                <div className="inputBox">
                  <span>Poids</span>
                  <input className="sameInput" onChange={ weightInputCHangeHandler } type="number" id="weightID" placeholder="Poid en Kg" />
                </div>
              </div>

              <br />

              <div className="nativeContainer positionTHem">
                <div className="inputBox">
                  <span>Origine</span>
                  <input className="sameInput" onChange={ originInputCHangeHandler } type="text" id="originID" placeholder="Il/elle vient d'ou" />
                </div>
                <div className="inputBox">
                  <span>Langue</span>
                  <input className="sameInput" onChange={ LanguageCHangeHandler } type="text" id="languageID" placeholder="Langue maternelle" />
                </div>
              </div>

              <br />

              <div className="professionContainer positionTHem">
                <div className="inputBox">
                  <span>Competance</span>
                  <input className="sameInput" onChange={ skillInputCHangeHandler } type="text" id="skillID" placeholder="Competance" />
                </div>
                <div className="inputBox">
                  <span>Annees d'experience</span>
                  <input className="sameInput" onChange={ experienceInputCHangeHandler } type="number" id="firstSailDateID" placeholder="Quand etait-ce la premiere fois " />
                </div>
              </div>

              <div className="genderContainer positionTHem">
                <div className="inputBox">
                  <input type="checkbox" onClick={ toggleMaleHandler } onChange={ genderInputCHangeHandler }  className="maleCheck" placeholder="Nom" /> Homme
                </div>
                <div className="inputBox">
                  <input type="checkbox" onClick={ toggleFemaleHandler } onChange={ genderInputCHangeHandler } className="femaleCheck" placeholder="Nom" /> Femme?
                </div>
              </div>

              <div className="inputBox inputBoxM">
                <input type="checkbox" onClick={ toggleMaritalStatusHandler } onChange={ maritalStatusInputCHangeHandler } id="maritalStatusID" placeholder="Competance" /> Marrie?
              </div>

              <div className="inputBox span salarySpan">
                <input className="sameInput" onChange={ salaryInputCHangeHandler } type="number" id="salaryID" placeholder="Salaire" />
              </div>

              <div className="inputBox inputBoxBtn">
                {/* <input type="submit" className="ButtonStyle" value="Enregistrer" /> */}
                <button className="ButtonStyle">Enregistrer</button>
              </div>

            </form>
          </div>

        </div>

        <div className={`backdrop ${backdropStyle}`} onClick={() => closeFormCard ()}></div>

        <div className="MainBody">
          <div className="Title">
            <h1>Les Matelos de Lolcos</h1>
          </div>
          <div className="ButtonSection">
            <Button width_={60} action="add" name_="Add" showForm={() => showFormCard()} />
          </div>
          {/* <Sailors reloadTable={reloadTable} /> */}


          <div className="MainBodyContent">

            {
              sailors.map(sailor => {
                return (
                  <div className='SailorContainer'>
                    <div className='leftSide'>
                      <div className='fullName'>
                        <h1>{sailor.firstName} {sailor.lastName}</h1>
                      </div>
                      <div className='dob'>
                        <h4>{sailor.dateOfBirth}</h4>
                      </div>
                      <div className='sizes'>
                        <div className='height_user'>
                          <h3> { parseFloat(sailor.height)} pied </h3>
                        </div>
                        <div className='weight_user'>
                          <h3>{ parseFloat(sailor.weight) } kg</h3>
                        </div>
                      </div>
                      <div className='origin'>
                        <div className='origine_user'>
                          <h3>{sailor.origin} </h3>
                        </div>
                        <div className='language_user'>
                          <h3> {sailor.language} </h3>
                        </div>
                      </div>
                    </div>
                  
                    <div className='rightSide'>
                      <div className="ButtonSection">
                        <UpdateButton width_={60} action="update" name_="update" showForm={() => showFormCard()} />
                      </div> 
                  
                      <div className="ButtonSection">
                        <DeleButton width_={60} action="delete" name_="delete" showForm={() => showFormCard()} />
                      </div> 
                    </div>
                  
                  </div>
                )
              })
            }
          
            
          </div>

        </div>
      </section>
    // </Provider>
  );
}

// const mapStateToProps = state => ({
//   sailors: state.sailors.sailors
// })

export default App;








{/* <div className='SailorContainer'>
              <div className='leftSide'>
                <div className='fullName'>
                  <h1>Ariel Desir Essadjo Mboma</h1>
                </div>
                <div className='dob'>
                  <h4>05/07/1991</h4>
                </div>
                <div className='sizes'>
                  <div className='height_user'>
                    <h3>1.73 m </h3>
                  </div>
                  <div className='weight_user'>
                    <h3>72 kg</h3>
                  </div>
                </div>
                <div className='origin'>
                  <div className='origine_user'>
                    <h3>Cameroon </h3>
                  </div>
                  <div className='language_user'>
                    <h3>Douala</h3>
                  </div>
                </div>
              </div>
            
              <div className='rightSide'>
                <div className="ButtonSection">
                  <UpdateButton width_={60} action="update" name_="update" showForm={() => showFormCard()} />
                </div> 
            
                <div className="ButtonSection">
                  <DeleButton width_={60} action="delete" name_="delete" showForm={() => showFormCard()} />
                </div> 
              </div>
            
            </div>
            
            <div className='SailorContainer'>
              <div className='leftSide'>
                <div className='fullName'>
                  <h1>Ariel Desir Essadjo Mboma</h1>
                </div>
                <div className='dob'>
                  <h4>05/07/1991</h4>
                </div>
                <div className='sizes'>
                  <div className='height_user'>
                    <h3>1.73 m </h3>
                  </div>
                  <div className='weight_user'>
                    <h3>72 kg</h3>
                  </div>
                </div>
                <div className='origin'>
                  <div className='origine_user'>
                    <h3>Cameroon </h3>
                  </div>
                  <div className='language_user'>
                    <h3>Douala</h3>
                  </div>
                </div>
              </div>
            
              <div className='rightSide'>
            
                <div className="ButtonSection">
                  <UpdateButton width_={60} action="update" name_="update" showForm={() => showFormCard()} />
                </div> 
            
                <div className="ButtonSection">
                  <DeleButton width_={60} action="delete" name_="delete" showForm={() => showFormCard()} />
                </div>
            
              </div>
            
            </div> */}



{/* <button className="ButtonStyle">
  <AddOutline color="white" />
</button> */}
