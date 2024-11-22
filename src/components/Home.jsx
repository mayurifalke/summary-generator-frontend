import React, { useState } from "react";
import Content from "./Content";
import { Link } from "react-router-dom";

function Home() {
  const item = [
    {
      name: "Dr. S. U. Ghumbre",
      dept: "Computer",
      file: ".files/Dr. S. U. Ghumbre.csv",
    },
    {
      name: "Vandana Shridhar Inamdar",
      dept: "Computer",
      file: ".files/Vandana Shridhar Inamdar",
    },
    {
      name: "Mr. Ramdas Bagawade",
      dept: "Computer",
      file: ".files/Mr. Ramdas Bagawade",
    },
    {
      name: "Pallavi Kulkarni",
      dept: "Computer",
      file: ".files/Pallavi Kulkarni",
    },
    {
      name: "Kishor Sadafale",
      dept: "Computer",
      file: ".files/Kishor Sadafale",
    },
    {
      name: "Dr. Manoj S Nagmode",
      dept: "E&TC",
      file: ".files/Dr. Manoj S Nagmode",
    },
    {
      name: "Kirti Vasant Thakur",
      dept: "E&TC",
      file: ".files/Kirti Vasant Thakur",
    },
    {
      name: "N P Futane",
      dept: "E&TC",
      file: ".files/N P Futane",
    },
    {
      name: "Dr. Ganesh Ramchandra Chavhan",
      dept: "E&TC",
      file: ".files/Dr. Ganesh Ramchandra Chavhan",
    },
  ];
  const [items, setItems] = useState(item);

  return (
    <Link to="/">
    <div>
     
      <section className="py-5 text-center container">
      <Link to={"/login"}>
      <button type="button" className="btn btn-secondary loginbtn">Login</button>
      </Link>
        <div className="row py-lg-5">
          
          <div className="col-lg-6 col-md-8 mx-auto">
            <h3 className="font-fixing">Publication Summary Generator</h3>
            <p className="text-body-secondary">
              The Publication Summary Generator is an innovative tool designed
              to help researchers and faculty members effortlessly manage and
              showcase their academic contributions. It automates the process of
              generating year-wise publication summaries, extracting data from
              databases like Google Scholar and DBLP.
            </p>
            <p className="text-body-secondary">
              With features like customizable filters, exportable reports, and a
              user-friendly interface, the tool simplifies profile building,
              saves time, and supports accreditation requirements by ensuring
              well-organized research visibility.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2">
                Learn More
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#" className="btn btn-secondary my-2">
                Get Started
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="contents row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {items.map((item, index) => (
              <Content key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Home;
