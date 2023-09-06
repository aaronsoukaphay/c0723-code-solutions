import { GiHamburgerMenu } from 'react-icons/gi';
import './AppDrawer.css';
import { useState } from 'react';

export default function AppDrawer({ tabs, header, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  function changeTitle(tab) {
    setIsOpen(false);
    onSelect(tab);
  }

  return (
    <>
      <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <MenuBar
        isOpen={isOpen}
        onClick={(tab) => changeTitle(tab)}
        tabs={tabs}
        header={header}
      />
    </>
  );
}

function MenuBar({ isOpen, onClick, tabs, header }) {
  const className = isOpen ? 'menu-drawer is-open' : 'menu-drawer';
  return (
    <div className={className}>
      <h3 className="menu-heading">{header}</h3>
      <ul className="menu-items">
        {tabs.map((tab, index) => (
          <li key={index} className="menu-item" onClick={() => onClick(tab)}>
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Backdrop({ isOpen, onClick }) {
  const className = isOpen ? 'menu-shade is-drawn' : 'menu-shade';
  return <div className={className} onClick={onClick} />;
}
