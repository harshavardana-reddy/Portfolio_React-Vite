import { BrowserRouter } from "react-router-dom"
import MainNavBar from  "./Components/MainNavBar"
import { ThemeProvider } from './Components/ThemeContext';
import CustomCursor from "./Components/CustomCursor";

function App() {

  return (
    <div>
      <ThemeProvider>
        <BrowserRouter>
          <CustomCursor/>
          <MainNavBar/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
