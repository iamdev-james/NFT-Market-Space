import React, {useState} from 'react';
import useDark from '../hooks/useDark';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function App() {
  const [colorTheme, setTheme] = useDark();
  const [darkMode, setDarkSide] = useState(colorTheme === 'light'? true: false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch
      style={{ marginRight: '10px' }}
      checked={darkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
};
