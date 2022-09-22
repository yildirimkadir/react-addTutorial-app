import React from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState("");
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
  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorial();
  };

  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorial();
  };

  return (
    <div>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList tutorials={tutorials} deleteTutorial={deleteTutorial} />
    </div>
  );
};

export default Home;
