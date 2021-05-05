import React from "react";
import Dreamer from "../../Components/Dreamer/Dreamer";

function DreamersPage({dreamers, handleDeleteDreamer}) {
  return (
    <>
      <div class="patterns">
        <svg width="100%" height="100%">
          <text x="50%" y="60%" text-anchor="middle">
            Always Dreamers
          </text>
        </svg>
      </div>
      <div className="DreamerPage-grid">
          {dreamers.map((dreamer) => (
            <Dreamer dreamer={dreamer} key={dreamer._id} handleDeleteDreamer={handleDeleteDreamer} />
          ))}
      </div>
    </>
  );
}

export default DreamersPage;
