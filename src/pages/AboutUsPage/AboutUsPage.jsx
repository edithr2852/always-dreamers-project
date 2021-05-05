import React from "react";
import "../../index.scss";

export default function AboutUsPage({ handleAddDreamer }) {
  return (
    <>
      <div class="patterns">
        <svg width="100%" height="100%">
          <text x="50%" y="60%" text-anchor="middle">
            All About Us
          </text>
        </svg>
      </div>
      <section className="aboutUs-Daca">
        <h2>Keep the DREAM alive!</h2>
        <p>
          DACA recipients and their families neew our help to keep their dreams
          alive. We need to make sure that while we continue to fight for
          collective liberation of all migrants in the country, we also support
          those who have the privilege of temporally relief.
        </p>
        <p>
          CAN WE COUNT ON YOU to help us make sure that DACA recipients in our
          community renew their application? Sponsor a Dreamer, make a donation
          to the DACA Renewal Fund!
        </p>
      </section>
      {/* <aside className="daca-img">
        <img
          src="https://powertotheposter-production.s3.amazonaws.com/uploads/defend-daca/AshleyLukashevsky-Unafraid.jpg?mtime=20171026180952"
          width="500"
          height="700"
        />
      </aside> */}
      <section>
        {" "}
        <img
          src="https://pbs.twimg.com/media/DLOe_1BVYAA5hnw.jpg"
          width="900"
          height="700"
        />
      </section>
    </>
  );
}
