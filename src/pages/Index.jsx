import React from "react";
import { Header } from "../components/layouts/Header";
import { Activities } from "../components/layouts/Activities";
import "../assets/css/index.css";

export const Index = () => {
  return (
    <div>
      <Header />
      <Activities />
      <Activities />
    </div>
  );
};
