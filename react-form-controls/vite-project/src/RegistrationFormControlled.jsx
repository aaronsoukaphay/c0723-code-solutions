import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const obj = {
      username: username,
      password: password,
    };

    console.log('state:', obj);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Submit form</button>
    </form>
  );
}
