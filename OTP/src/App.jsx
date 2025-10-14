import "./App.css";
import Otp from "./components/Otp";

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}> OTP</h1>
      <Otp otpLength={6} />
    </div>
  );
}

export default App;
