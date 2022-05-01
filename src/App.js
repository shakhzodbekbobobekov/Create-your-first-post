import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [warning, setWarning] = useState("");
  const [datas, setDatas] = useState([
    { id: "1", program: "JavaScript", stack: "MERN Stack" },
    { id: "2", program: "Python", stack: "Back End" },
    { id: "3", program: "Front End", stack: "ReactJS" },
  ]);

  const addDatas = (add) => {
    if (add.program.length > 0 && add.stack.length > 0) {
      setDatas((prevE) => {
        return [...prevE, add];
      });
    } else {
      setWarning("Enter a value");
    }
  };

  const removeBtn = (id) => {
    setDatas((prevData) => {
      return prevData.filter((data) => id !== data.id);
    });
  };

  return (
    <div className="container text-center border w-50 my-3 p-5">
      <h1 className="p-2">Create your first post</h1>

      <Form addDatas={addDatas} />

      <table className="table">
        <thead>
          <tr>
            <th scope="col-sm">#</th>
            <th scope="col-sm">Programming</th>
            <th scope="col-sm">Stack</th>
            <th scope="col-sm">Actions</th>
          </tr>
        </thead>

        <tbody>
          {datas &&
            datas.map((data, index) => (
              <tr key={data.id}>
                <th>{index + 1}</th>
                <td>{data.program}</td>
                <td>{data.stack}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => removeBtn(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {warning && <p className="warning">{warning}</p>}
    </div>
  );
}

export default App;
