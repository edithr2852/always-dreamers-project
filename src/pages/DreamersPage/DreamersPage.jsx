import React from "react";
import Dreamer from "../../Components/Dreamer/Dreamer";

function DreamersPage(props) {
  return (
    <>
      <h1>Always Dreamers</h1>
      <div className="DreamerPage-grid">
          {props.dreamers.map((dreamer) => (
            <Dreamer dreamer={dreamer} key={dreamer._id} />
          ))}
      </div>
    </>
  );
}

export default DreamersPage;
