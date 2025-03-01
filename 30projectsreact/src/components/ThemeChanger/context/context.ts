import { createContext } from 'react';

export interface ThemeContextValue {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export const themeContext = createContext<ThemeContextValue | null>(null);

/*when when we use useContext, React creates a subscription to the context we created using createContext. When we udpate the value passed to this context, whichever component that is accessing this value gets re-render with the updated value when ever the value changes */
