import React, { useState } from "react";

// STYLES

import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector 
          checked={ isDark } 
          uncheckedIcon={ false } 
          checkedIcon={ false } 
          onChange={ () => setIsDark(!isDark) } />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
}

export default Toggle;
