import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Form from "../components/Form";
import Layout from "../components/Layout";

const About = () => {
  const cardStuff = {
    title: "Card Title",
    text: "Some text",
  };

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1000);

  return (
    <Layout>
      <div className="ecmain">
        <h2>This is the about page.</h2>
        <p>
          These are children. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Possimus officia quis temporibus labore obcaecati
          non? Voluptatibus distinctio, amet eveniet rem ab sunt accusamus!
          Asperiores sit officia enim odio, voluptas porro.
        </p>
        <p>So are these!</p>
        <p>
          These are children. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Possimus officia quis temporibus labore obcaecati
          non? Voluptatibus distinctio, amet eveniet rem ab sunt accusamus!
          Asperiores sit officia enim odio, voluptas porro.
        </p>
        <p>
          These are children. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Possimus officia quis temporibus labore obcaecati
          non? Voluptatibus distinctio, amet eveniet rem ab sunt accusamus!
          Asperiores sit officia enim odio, voluptas porro.
        </p>
        <p>So are these!</p>
        <p>
          These are children. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Possimus officia quis temporibus labore obcaecati
          non? Voluptatibus distinctio, amet eveniet rem ab sunt accusamus!
          Asperiores sit officia enim odio, voluptas porro.
        </p>
      </div>
    </Layout>
  );
};

export default About;
