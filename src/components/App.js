
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [fields ,setFields] = useState([
    {name : "" ,age: ""}
  ]);

  const handleChange = (index,event) => {
      const {name,value} = event.target;

      const newFields = [...fields];
      newFields[index][name] = value;
      setFields(newFields);
  }

  const removeField = (index) => {
    const newField = fields.filter((_,i) => i !== index);
    setFields(newField);
  }

  const addField = () => {
    const newField = {name : "",age : ""}
    setFields((prev) => [...prev,newField]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fields);
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            {fields.map((field,index) => (
              <div key={index}>
                <input 
                  type="text"
                  name="name"
                  placeholder="name"
                  value={field.name}
                  onChange={(e) => handleChange(index,e)}
                />

                <input 
                  type="text"
                  name="age"
                  placeholder="age"
                  value={field.age}
                  onChange={(e) => handleChange(index,e)}
                />

                <button type="button" onClick={() => removeField(index)}>
                  Remove
                </button>

              </div>
            ))}
            
            <button type="button" onClick={addField}>
              Add More
            </button>

            <button type="submit">
              Submit
            </button>
        </form>
    </div>
  )
}

export default App
