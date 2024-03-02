import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  console.log('Generated identifier:', passwordHintId)
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters,   
      </p>
      <p id={passwordHintId}>
      
        Password Generated identifier: {passwordHintId}
      </p>
    </>
  );
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h6 style={{color:'green'}}> if PasswordField appears multiple times on the screen, the generated IDs won’t clash.</h6>
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  );
}
