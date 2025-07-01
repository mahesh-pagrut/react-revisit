import React from "react";
import DynamicForm from "./components/DynamicForm";
import formSchema from "./data/formSchema";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>🧑‍💻 Dynamic Form Generator</h1>
      <DynamicForm schema={formSchema} />
    </div>
  );
};

export default App;
