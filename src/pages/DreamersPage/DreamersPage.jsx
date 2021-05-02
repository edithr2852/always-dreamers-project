import React from "react";
import Dreamer from "../../Components/Dreamer/Dreamer";

function DreamersPage(props) {
  return (
    <>
      <h1>Dreamers Page</h1>
      <h4>This will display all the dreamers</h4>
      <div className="DreamerPage-grid">
				{props.dreamers.map(dreamer =>
					<Dreamer
					dreamer={dreamer}
					key={dreamer._id}
					/>
					)}
		</div>
    </>
  );
}

export default DreamersPage;
