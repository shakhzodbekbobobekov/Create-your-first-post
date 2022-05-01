import { useState } from "react";

function Form({ addDatas }) {
  const [program, setProgram] = useState("");
  const [stack, setStack] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    addDatas({ program, stack });
    setProgram("");
    setStack("");
  };

  return (
    <form onSubmit={handleForm}>
      <input
        className="form-control"
        type="text"
        name="progLang"
        id="progLang"
        placeholder="Programming Language"
        value={program}
        onChange={(e) => setProgram(e.target.value)}
      />

      <input
        className="form-control my-3"
        type="text"
        name="stack"
        id="stack"
        placeholder="Enter your favourite stack"
        value={stack}
        onChange={(e) => setStack(e.target.value)}
      />

      <button className="btn btn-primary w-100">Add post</button>
      <h3 className="progLang">Programming Language</h3>
    </form>
  );
}

export default Form;
