import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Authentication/Login";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import CompileChecklist from "./pages/Dashboard/Supervisors/CompileChecklist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route  path="/dashboard/:type" element={   <DashboardLayout /> }>
  
        </Route>
        <Route path="/dashboard/supervisor/compilechecklist" element={<CompileChecklist/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
