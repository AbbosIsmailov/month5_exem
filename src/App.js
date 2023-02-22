import { Route, Routes } from "react-router-dom";
import Invoice from "./components/invoice";
import Main from "./components/main";
import SideBar from "./components/sideBar";
import LogIn from "./components/logIn";

function App() {
  return (
    <div className="App">
      <section className='app-row'>
        <SideBar />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/main" element={<Main />} />
          <Route path="/invoices" element={<Invoice />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
