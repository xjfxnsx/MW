/* import React, { useState } from 'react';

interface ToggleProps {
  title: string;
  children: React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ title, children }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <h2 className="SectionTitle" onClick={toggleContent} style={{ cursor: 'pointer' }}>
      <span dangerouslySetInnerHTML={{ __html: title }}></span>
      </h2>
      {showContent && children}
    </div>
  );
};

export default Toggle;

import React, { useState } from 'react';

const Toggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2 className="SectionTitle" onClick={handleToggle}>
        {title}
        <sub>{isOpen ? '&#x25B2;' : '&#x25BC;'}</sub>
      </h2>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Toggle; */

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