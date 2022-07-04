import React from "react";
import './Article.css';


function Article(props){
    return(
      <div>
         <h2>{props.name}</h2>
          <img src={props.img} alt="logo"/>
          <p>{props.intro}</p>
        
        
        
        
      </div>
    );
  }
export default Article;
// props contain object as name,image and intro
//  