function Conditional() {
  const isLoggedIn = true;

  return (
    <div className="box">
      <h2>Conditional Rendering</h2>

      {isLoggedIn ? <p>Welcome, Gagandeep!</p> : <p>Please Login</p>}
    </div>
  );
}

export default Conditional;