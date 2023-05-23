// packages
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";

// components 
import Watermark from "@components/Watermark";

// util 
import { auth } from "../config/firebase";

const Home = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home__hero">
        <img src={user.photoURL} />
        <div className="home__hero__message">
          <span className="home__hero__message__welcome-greeting" id="welcome-greeting">Hello {user.displayName}, welcome to</span>
          <h1>Random "Quote" Generator</h1>
        </div>
        <div className="home__hero__generate-quote-btn">
          <button onClick={() => { navigate("/quotes") }}>Generate Quote</button>
        </div>
      </div>
      <Watermark />
    </div >
  )
}

export default Home;