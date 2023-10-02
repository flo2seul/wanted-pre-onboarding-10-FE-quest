import { useState } from "react";

const Login = () => {
  const [state, setState] = useState({
    id: "",
    password: "",
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(state);
  };
  return (
    <div className="Login">
      <input name="id" value={state.id} onChange={handleChangeState}></input>
      <input
        name="password"
        value={state.password}
        onChange={handleChangeState}
      ></input>
      <button onClick={handleSubmit}></button>
    </div>
  );
};

export default Login;
