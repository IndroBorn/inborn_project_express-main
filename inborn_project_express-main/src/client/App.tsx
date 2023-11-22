import React from "react";
import "./App.css";
import Layout from "./Layout";
import Header from "./components/header";
import MainContent from "./components/MainContent";
import CardContent from "./components/CardContent";



export default function App() {
  return (
    <Layout>
      <Header/>
      <MainContent/>
    </Layout>
  );
}
