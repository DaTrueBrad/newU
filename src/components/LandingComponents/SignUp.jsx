import React, {useState} from 'react'
import { Collapse } from 'react-collapse'

function SignUp() {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="sign-up-button">
      <button onClick={() => setSignUp(!signUp)}>Sign Up</button>
      <Collapse isOpened={signUp}>
        <h1>testing</h1>
      </Collapse>
    </div>
  )
}

export default SignUp
