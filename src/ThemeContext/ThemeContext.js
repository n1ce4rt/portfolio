import React from 'react';


export const theme = {

  themeDark: true,

  // changeTheme: (boolean) => {
  //     // debugger
  //     theme.themeDark = boolean
  //     console.log(theme.themeDark)
  // }
};


export const ThemeContext = React.createContext(theme);