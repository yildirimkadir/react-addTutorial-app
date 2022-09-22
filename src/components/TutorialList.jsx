import React from "react";

const TutorialList = ({ tutorials, deleteTutorial }) => {
  return (
    <div className="container mt-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const {title, description, id} = item;
            return (
              <>
               <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>@mdo</td>
              </tr>
            </>

            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
