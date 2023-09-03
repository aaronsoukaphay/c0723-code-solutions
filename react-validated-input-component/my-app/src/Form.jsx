import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import './Form.css';

export default function Form() {
  const [password, setPassword] = useState('');

  return (
    <>
      <label>
        Password
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="input"
          />
        </div>
      </label>
      <span>
        {password === '' ? <FaTimes className="wrong" /> : null}
        {password.length >= 1 && password.length < 8 ? (
          <FaTimes className="wrong" />
        ) : null}
        {password.length >= 8 ? <ImCheckmark className="correct" /> : null}
      </span>
      {password === '' ? <p className="text">A password is required.</p> : null}
      {password.length >= 1 && password.length < 8 ? (
        <p className="text">Your password is too short.</p>
      ) : null}
    </>
  );
}
