import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Product.css";
import { Navbar } from "./Navbar";

export const Product = () => {
  const [productData, setProductData] = useState([]);
  //   console.log(productData);

  const [filterData, setFilterData] = useState([]);

  //function getText
  const getText = (e) => {
    // console.log(e);
    if (e == "all") {
      setFilterData(productData);
    } else {
      const categoryData = productData.filter((el) => {
        return el.category == e;
      });
      setFilterData(categoryData);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8000/ALL_TOPICS").then((data) => {
      setProductData(data.data);
      setFilterData(data.data);
    });
  }, []);
  return (
    <>
      <Navbar/>
      <div className="container-div">
        <div className="left-div">
        <div onClick={() => getText("all")}>
        <h4>ALL TOPICS</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>FILM-MAKING</h4>
      </div>
      <div onClick={() => getText("beat-boxing")}>
        <h4>BEAT BOING</h4>
      </div>
      <div onClick={() => getText("content-creation")}>
        <h4>CONTENT CREATION</h4>{" "}
      </div>
      <div onClick={() => getText("beat-boxing")}>
        <h4>CONTENT CREATION</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>FILM PRODUCTION</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>NOVEL WRITING</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>ENTREPRENEURSHIP</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>MUSIC</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>FASHION BLOGGING</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>DESIGN</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>ILLUSTRATION</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>F&B</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>BAKING</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>EMCEEING</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>PERFORMING ARTS</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>STAND-UP COMEDY</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>IMPROV COMEDY</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>ARTIST MANAGEMENT</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>FOOD BLOGGING</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>CHEF</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>RADIO JOCKEY</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>PHOTOGRAPHY</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>RESTAURANT BUSINESS</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>WEB SERIES</h4>
      </div>
      <div onClick={() => getText("film-making")}>
        <h4>PERSONAL FINANCE</h4>
      </div>
          

          {/* jitne category hai utne div dala uper me aur "onclick" pe getText function ko call kiya jisme jo 'category' div me di hai wo getText function me dalna hai  */}
        </div>
        <div className="right-div">
          {filterData.map((el) => (
            <div className="image-div" key={el.id}>
              <img src={el.profile_img} alt="" height={"60%"} width={"100%"} />
              <div>{el.name}</div>
              <div>{el.title}</div>
              <div>{el.role}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
