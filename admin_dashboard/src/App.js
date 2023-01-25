
import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { Route,Routes } from "react-router-dom";
import TopBar from "./views/Global/TopBar";
import SideBar from "./views/Global/SideBar";
import Dashboard from "./views/Dashboard";
import Team from './views/Team'
import Bar from './views/Bar'
import Contacts from "./views/Contacts";
import Faq from "./views/Faq";
import Form from "./views/Form";
import Invoices from "./views/Invoices";
import Line from "./views/Line";
import Pie from "./views/Pie";
import Calendar from "./views/Calendar";
import Geography from "./views/Geography";

function App() {
  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar  />
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/faq" element={<Faq/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/geography" element={<Geography/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
