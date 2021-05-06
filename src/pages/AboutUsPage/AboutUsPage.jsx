import React from "react";
import "../../index.scss";

export default function AboutUsPage({ handleAddDreamer }) {
  return (
    <>
      <div class="patterns">
        <svg width="100%" height="100%">
          <text x="50%" y="60%" text-anchor="middle">
           About Us
          </text>
        </svg>
      </div>
      <section className="aboutUs-Daca">
        <h1>Keep the DREAM alive!</h1>
        <h3>For those who may not know, DACA is an immigration program which was signed in 2012 under former president Barack Obama's administration. The program functions as temporary respite for the young and undocumented immigrants of America by delaying deportation for them, helping Dreamers by giving them a chance to study and work in the United States.</h3>
        <h3>
          DACA recipients and their families need our help to keep their dreams
          alive. We need to make sure that while we continue to fight for
          collective liberation of all migrants in the country, we also support
          those who have the privilege of temporally relief.
        </h3>
        <h3>
          CAN WE COUNT ON YOU to help us make sure that DACA recipients in our
          community renew their application? Sponsor a Dreamer, make a donation
          to the DACA Renewal Fund!
        </h3>
      </section>
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
