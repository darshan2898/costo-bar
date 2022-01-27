// import HomePage from "./components/pages/HomePage";
import GlobalStyles from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/Routes";

const theme = {
  /* COLOR SHADES */
  colors: {
    lightblue: "#3895cf",
    darkblue: "#032a51",
    whiteOne: "#fff",
    lightgrey: "#f0f0f0",
    black: "#010529",
  },

  fonts: {
    /* FONTS */
    headingFont: "'Prata', serif",
    bodyFont: "'Yantramanav', sans-serif",
    stylishFont: "'Damion', cursive",
    smallText: "0.7em",
  },

  locals: {
    /* REST OF THE VARIABLES */
    letterSpacing: "1px",
    transition: "all 0.3s ease-in-out",
    maxWidth: "1250px",
    fixedWidth: "678px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Routes />
          {/* <HomePage /> */}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
