import { BrowserRouter } from "react-router-dom";
import MainNavBar from "./Components/MainNavBar";
import { ThemeProvider } from "./Components/ThemeContext";
import { CursorProvider } from "./Components/CursorContext";
import CustomCursor from "./Components/CustomCursor";

function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <BrowserRouter>
          <CustomCursor />
          <MainNavBar />
        </BrowserRouter>
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;
