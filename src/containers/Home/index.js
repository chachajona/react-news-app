import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { clearUserInfo } from "../../utils/Common";

const Home = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    navigate("/login");
    clearUserInfo();
  };

  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <br />
      <Link to="users">Go to the Users page</Link>
      <br />
      <Link to="settings">Go to the Settings page</Link>
      <br />
      <Link to="usage">Go to the Usage page</Link>
      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
      </div>
    </section>
  );
};

export default Home;
