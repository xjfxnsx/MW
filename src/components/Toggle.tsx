import React, { useState } from 'react';

interface ToggleProps {
    title: string;
    children: React.ReactNode;
  }

const Toggle: React.FC<ToggleProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2 className="SectionTitle" onClick={handleToggle}>
        {title}
        <sub style={{cursor: 'pointer'}}>{isOpen ? '▲' : '▼'}</sub>
      </h2>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Toggle;