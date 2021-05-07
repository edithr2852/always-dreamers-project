import React from "react";
import DreamerStory from "../../Components/DreamerStory/DreamerStory";
import { useLocation } from "react-router-dom";

function DreamersStoryPage({ dreamers }) {
  const {
    state: { dreamer },
  } = useLocation();

  return (
    <>
      <section className="dreamersStoryPage border">
        <div class="container">
          <h1 className="neon">{dreamer.name} is a dreamer</h1>
        </div>
        <DreamerStory key={dreamer._id} dreamer={dreamer} />
      </section>
    </>
  );
}

export default DreamersStoryPage;
