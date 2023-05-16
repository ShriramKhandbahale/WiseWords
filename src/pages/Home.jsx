import AuthCard from "@components/AuthCard";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";

import Watermark from "@components/Watermark";
const Home = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const navToQuotes = () => {
    navigate("/quotes")
  }

  return (
    <div className="home">
      <div className="hero">
        <img src={user.photoURL} />
        <div className="hero__message">
          <span id="welcome-greeting">Hello {user.displayName}, welcome to</span>
          <h1>Random "Quote" Generator</h1>
        </div>
        <div className="hero__generate-quote-btn">
          <button onClick={navToQuotes}>Generate Quote</button>
        </div>
      </div>
      <Watermark />
    </div >
  )
}

export default Home;