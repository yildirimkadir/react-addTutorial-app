import React from "react";
import { useState } from "react";

const AddTutorial = ({addTutorial}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTutorial({title: title, description:desc }); // obje olarak olusturdum.
    setTitle("");
    setDesc("");   
  };

  return (
    <div className="container text-center mt-4 w-50">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="title" className="form-label">
            Titel
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
