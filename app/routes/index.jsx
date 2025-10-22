import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";
import indexStyles from "~/styles/index.css?url";

export const meta = () => [
  { title: "Gamingandmusic" },
  { name: "description", content: "Gaming and music homepage" },
];

export const links = () => [{ rel: "stylesheet", href: indexStyles }];

export default function Index() {
  return ( 
    <div className="index-container" style={{ textAlign: "center", color: "#fff", background: "#000", minHeight: "100vh" }}>
      <div className="container" style={{ padding: "5vh 2vw" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Gamingandmusic</h1>

        <img
          src="/images/Gaming-image.png"
          alt="Gamingandmusic Avatar"
          className="avatar"
          style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover" }}
        />

        <nav className="nav" style={{ marginTop: "2rem" }}>
          <Link to="/music">
            <button style={buttonStyle}>Music</button>
          </Link>
          <Link to="/avatar">
            <button style={buttonStyle}>Avatar</button>
          </Link>
          <Link to="/live">
            <button style={buttonStyle}>Live</button>
          </Link>
        </nav>

        <hr
          style={{
            height: "6px",
            background:
              "linear-gradient(to right, #ff0000, #ff9900, #ffff00, #33cc33, #3399ff, #9933ff)",
            border: "none",
            margin: "5vh 0",
            width: "100%",
            animation: "rainbowSlide 8s linear infinite",
          }}
        />
      </div>

      <Footer />
    </div>
  );
}

const buttonStyle = {
  margin: "0 10px",
  padding: "10px 20px",
  borderRadius: "12px",
  border: "none",
  background: "#333",
  color: "#fff",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background 0.3s",
};