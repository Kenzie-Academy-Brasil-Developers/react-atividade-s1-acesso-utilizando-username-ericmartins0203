import "./styles.css";

function WelcomePage({ user, setIsLoggedIn }) {
  function HandleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="welcome">
      <div>Bem vindo, {user}. </div>
      <button className="logout" onClick={HandleLogout}>
        Logout
      </button>
    </div>
  );
}

export default WelcomePage;
