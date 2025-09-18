import { themeData } from './themeData';

export function applyTheme(themeName) {
  const theme = themeData[themeName];
  if (!theme) return;

  Object.keys(theme).forEach(key => {
    document.documentElement.style.setProperty(key, theme[key]);
  });

  localStorage.setItem('theme', themeName);
}
