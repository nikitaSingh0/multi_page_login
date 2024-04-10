import SignUp from "./pages/sign_up/SignUp";
import CreateProfile from "./pages/profile/CreateProfile";
import UserInfo from "./pages/user_info/UserInfo";
import EmailVerification from "./pages/verify_email/EmailVerification";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/profile" element={<CreateProfile />} />
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/verify-email" element={<EmailVerification />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
