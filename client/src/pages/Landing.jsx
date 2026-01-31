import { Link } from "react-router-dom"
import bgVideo from "../assets/bg.mp4"

export default function Landing() {
  return (
    <div className="video-container">
      <video src={bgVideo} autoPlay loop muted />
      <div className="video-overlay">
        <h1 style={{fontSize:"3rem"}}>Smart Expense Tracking</h1>
        <p style={{margin:"20px 0",color:"#cbd5f5"}}>
          Simple • Fast • Secure
        </p>
        <div>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn-outline">Register</Link>
        </div>
      </div>
    </div>
  )
}
