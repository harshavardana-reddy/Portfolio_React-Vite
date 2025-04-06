import { BrowserRouter } from "react-router-dom"
import MainNavBar from  "./Components/MainNavBar"
import { ThemeProvider } from './Components/ThemeContext';

function App() {

  return (
    <div>
      <ThemeProvider>
        <BrowserRouter>
          <MainNavBar/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
