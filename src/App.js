import './App.css';
import React, { useState, useRef } from 'react'
import './main.css'

function App() {
  const gpaInputRef = useRef()
  const [gpaRes, setGPA] = useState(0)
  const [alert, setAlert] = useState("")

  const roundToHundredth = (value) => {
    return Number(value.toFixed(3));
  };

  function convertGPA() {

    if (gpaInputRef.current.value == "") {
      setGPA(0)
      setAlert("Enter your GPA")
      return
    }

    if (gpaInputRef.current.value >= 5){
      setGPA(0)
      setAlert("")
    }
      
    
    else if(gpaInputRef.current.value<0.67){
      setAlert("your guc GPA can't be less than 0.67")
      setGPA(0)

    }
    else if(gpaInputRef.current.value<0.66){
      setAlert("your guc GPA can't be less than 0.66")
      setGPA(4)

    }

    else {
      var gpa1 = 4.0 - (gpaInputRef.current.value - 0.7)
      var gpa2 = (gpa1 * 4.0) / 4.3
      setAlert("")
      setGPA(roundToHundredth(gpa2))
    }


  }




  return (
    <>
      <div class="contact1" >
        <div class="container-contact1">
          <div class="contact1-pic js-tilt" data-tilt>
            <img src='https://play-lh.googleusercontent.com/gNy40q6S_519oQZ_AE9sGypZ-Z94zDy2Xpm5Tg5mYf8yVOSLAxAhEatKLn0vJDyFErE' alt="IMG" />
          </div>

          <form class="contact1-form validate-form">
            <span class="contact1-form-title">
              Convert your GPA
				</span>

            <div class="wrap-input1 validate-input" >
              <input required="true" class="input1" type="number" min="0.66" max="5.0" step="0.01" ref={gpaInputRef} placeholder="guc scale gpa" />
              <span class="shadow-input1"></span>
            </div>

            <div class="container-contact1-form-btn">
              <button type='button' class="contact1-form-btn" onClick={convertGPA}>
                Convert GPA
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
            <br /><br />

            <div class="gpaRes">
              <h2 style={{ 'text-align': "center" }}>  {gpaRes}/4.0</h2><br />
              <h5 style={{ 'text-align': "center" , 'color':'red'}}>  {alert}</h5><br />
              <h5 style={{ 'text-align': "center" }}>  note: this conversion is percentage based, meaning it shows you your percentage from 0.0 to 4.0 on the 4.0 scale based on your gpa percentage from 5.0 to 0.7 on the guc scale</h5><br />
              

            </div>




          </form>
        </div>
      </div>
    </>


  );
}

export default App;
