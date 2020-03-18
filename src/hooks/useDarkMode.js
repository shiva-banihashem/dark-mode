
import {useLocalStorage} from './useLocalStorage'
import {useEffect } from 'react'
export const useDarkMode = (initialValue) => {

    const [storedValue, setStoredValue] = useLocalStorage('darkMode',initialValue);

    useEffect(() => {
        
        storedValue
          ? document.body.classList.add("dark-mode")
          : document.body.classList.remove("dark-mode");
      }, [storedValue]);
    
      return [storedValue, setStoredValue];
    }



         
  
  