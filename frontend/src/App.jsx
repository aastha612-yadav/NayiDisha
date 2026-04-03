import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import RoleSelect from "./pages/RoleSelect.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/signup/:role" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
