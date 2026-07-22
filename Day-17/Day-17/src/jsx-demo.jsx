function JSXDemo() {
  const name = "Gagandeep";
  const course = "MERN Stack";

  return (
    <div>
      <h2>JSX Demo</h2>

      <p>Name: {name}</p>

      <p>Course: {course}</p>

      <p>Current Year: {new Date().getFullYear()}</p>

      <p>{5 + 10}</p>
    </div>
  );
}

export default JSXDemo;