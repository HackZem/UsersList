import { ThemeProvider } from "styled-components";
import { GlobalContainer, GlobalStyles } from "./styles/global";
import { Header } from "./components/header";
import { ListItems } from "./components/listItems";
import { useContextHook } from './context/hook';
import { defaultTheme } from "./config/theme";

export const App = () => {

  const context = useContextHook(); 

  // two times the same variable!

 const currentTheme = (defaultTheme as any)[context.theme.themeName];


  return (
    <>
    <ThemeProvider theme={currentTheme}> 
      <>
        <GlobalStyles />
        <Header />
        <GlobalContainer>
          <ListItems />
        </GlobalContainer>
      </>
      </ThemeProvider> 
      </>
  )
}

