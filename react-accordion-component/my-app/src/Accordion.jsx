import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ topics }) {
  const [id, setId] = useState(0);

  function handleID(buttonId) {
    setId(buttonId);
  }

  return (
    <>
      <Header topics={topics} onClick={handleID} id={id} />
    </>
  );
}

function Header({ onClick, topics, id }) {
  return (
    <>
      {topics.map((topic) => (
        <div key={topic.id}>
          <div>
            <button
              onClick={() =>
                topic.id === id ? onClick(undefined) : onClick(topic.id)
              }>
              {topic.title}
            </button>
          </div>
          <div className={id === topic.id ? 'content' : 'content hidden'}>
            {topic.content}
          </div>
        </div>
      ))}
    </>
  );
}
