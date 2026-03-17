import EmailVerify from "./features/auth/components/EmailVerify"
import Register from "./features/auth/components/Register"
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/secretary/register" element={<Register />} />
        <Route path="/secretary/email-sent" element={<EmailVerify />} />
        <Route path="/secretary/verify-email" element={<EmailVerify />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
