import React from "react";
import Dreamer from "../../Components/Dreamer/Dreamer";

function DreamersPage({dreamers, handleDeleteDreamer}) {
  return (
    <>
      <span>Always Dreamers</span>
      <div className="DreamerPage-grid">
          {dreamers.map((dreamer) => (
            <Dreamer dreamer={dreamer} key={dreamer._id} handleDeleteDreamer={handleDeleteDreamer} />
          ))}
      </div>
    </>
  );
}

export default DreamersPage;
