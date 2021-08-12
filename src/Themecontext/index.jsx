import React, {createContext, useState} from 'react';//we import from react the hooks createContext and useState

export const ThemeContext = createContext();//we create a Context that will be provide to all the children components

export const ThemeContextProvider = (props) => {/*We build a component to provide the context to the parent component, with a props that 
   will be use in the return and given to the children*/

  const[theme, setTheme] = useState(true);//we use a new state named theme that will take a default state given in the useState()
  

  const toggleTheme = () =>{
    setTheme(!theme)
  }

  return(

    <ThemeContext.Provider value={{theme, toggleTheme}}>{/*we return the component ThemeContext with a .Provider that will spread the Context to the children*
    and we give here a value calling as destuctured object the theme state */}
      {props.children} {/*the props is called here and this is by this way the Context will be provide to the children component */}
      
    </ThemeContext.Provider>
  )

}