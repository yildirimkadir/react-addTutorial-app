import React from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  const getTutorial = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutorial();
  }, []);

  //! POST (Create)
  const addTutorial = async (title, desc) => {
    try {
      await axios.post(url, {title:title, description:desc}); // Only one parameter is auch okey(tutorial), but addTutorial in addtutorial.jsx must be object) 
    } catch (error) {
      console.log(error);
    }
    getTutorial();
  };
 // Delete 
  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorial();
  };

  //! Update (PUT)
  const editTutorial = async (id,title, description) => {
    try {
      await axios.put(`${url}/${id}`, {title:title, description: description});
    } catch (error) {
      console.log(error)
    }
     getTutorial(); 
  }


  return (
    <div>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList tutorials={tutorials} deleteTutorial={deleteTutorial} editTutorial={editTutorial}/>
    </div>
  );
};

export default Home;
