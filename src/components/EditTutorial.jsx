import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


const EditTutorial = ({editItem, setEditItem, editTutorial}) => {
    const {id, title, description} = editItem;

    const [editTitle, setEditTitle] = useState(title)
    const [editDesc, setEditDesc] = useState(description)

useEffect(() => {
    setEditTitle(title);
    setEditDesc(description);
  }, [title, description]);

    const handleSubmit = () => {
        editTutorial(id, editTitle, editDesc)
    }


    console.log(editTitle)
  return (
<div className="modal fade" id="edit-modal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Edit Tutorial</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          {/* <span aria-hidden="true">&times;</span> */}
        </button>
      </div>
      <div className="modal-body">
      <label for="title" className="form-label">
            Titel
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={editTitle || ""}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <label for="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={editDesc || ""}
            onChange={(e) => setEditDesc(e.target.value)}
          />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" 
        onClick={handleSubmit} data-bs-dismiss="modal" >Submit changes</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default EditTutorial