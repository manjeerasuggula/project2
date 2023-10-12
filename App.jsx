import React from "react";
import data from "./data";
import ListItem from "./listitem";
const App=()=>{
  return(
    <main className="container">
      <ul className="comments-container">
        {data.map((eachcomment)=>{
          const{id,email,name,body}=eachcomment;
          return(
            <ListItem key={id} id={id} email={email} name={name} body={body} />
          )
        })}
      </ul>
    </main>
  )
}


export default App;