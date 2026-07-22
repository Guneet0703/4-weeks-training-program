function Home(props) {
  return (
    <div className="box">
      <h2>Home Component</h2>

      <p>
        <strong>Name:</strong> {props.name}
      </p>

      <p>
        <strong>Age:</strong> {props.age}
      </p>
    </div>
  );
}

export default Home;