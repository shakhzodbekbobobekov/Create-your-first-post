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
      setWarning("");
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
    <div className="container text-center my-3 p-5">
      <h1 className="p-2">Create your first post</h1>

      <div className="row">
        <Form addDatas={addDatas} />
      </div>

      <div className="row">
        <table className="table table-hover">
        <thead className="table-Light">
          <tr>
            <th col="sm">#</th>
            <th col="sm">Programming</th>
            <th col="sm">Stack</th>
            <th col="sm">Actions</th>
          </tr>
        </thead>

        <tbody>
            {datas &&
              datas.map((data, index) => (
                <tr  key={data.id}>
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
      </div>
      {warning && <p className="warning">{warning}</p>}
    </div>
  );
}

export default App;
