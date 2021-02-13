import './App.css';
import React, { useState, useRef } from 'react'
import './main.css'

function App() {
  const gpaInputRef = useRef()
  const [gpaRes, setGPA] = useState(0)

  const roundToHundredth = (value) => {
    return Number(value.toFixed(3));
  };

  function convertGPA() {

    if (gpaInputRef.current.value == "") {
      console.log("here")
      setGPA("Enter your GPA")
      return
    }

    if (gpaInputRef.current.value >= 5)
      setGPA(0)


    else {
      var gpa1 = 4.3 - (gpaInputRef.current.value - 0.7)
      var gpa2 = (gpa1 * 4.0) / 4.3
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
            </div>




          </form>
        </div>
      </div>
    </>


  );
}

export default App;
