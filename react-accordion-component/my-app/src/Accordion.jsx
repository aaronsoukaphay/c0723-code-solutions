import { useState } from 'react';

export default function Accordion({ topics }) {
  const [openTopic, setOpenTopic] = useState(topics[1]);

  function handleClick(topic) {
    setOpenTopic(topic === openTopic ? undefined : topic);
  }

  return (
    <div>
      {topics.map((topic) => (
        <HeaderAndDetail
          key={topic.id}
          onClick={() => handleClick(topic)}
          topic={topic}
          isOpen={openTopic === topic}
        />
      ))}
    </div>
  );
}

function HeaderAndDetail({ topic, isOpen, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{topic.title}</button>
      {isOpen && <p>{topic.content}</p>}
    </div>
  );
}
