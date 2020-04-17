import React, { useState, useEffect } from "react";
import { Header } from "../components/layouts/Header";
import { Activities } from "../components/layouts/Activities";
import { QuestionSection } from "../components/layouts/QuestionSection";
import "../assets/css/index.css";
import data from "../data.json";
export const Index = () => {

  const {activities, questions} = data

  const [dataActivities, setDataActivities] = useState([]);
  useEffect(() => {
    const setData = () => setDataActivities(activities);
    setData();
  }, [activities, questions]);

  const numberOfActivities = dataActivities.map((activity, index) => (
    <Activities activity={activity} key={index} index={index} />
  ));

  return (
    <>
      <Header />
      {numberOfActivities}
      <QuestionSection data={questions} />
      {/* <FormInput /> */}
    </>
  );
};
