import React from "react";

export default function DonationPage({ handleAddDreamer }) {
  return (
    <>
      <div class="patterns">
        <svg width="100%" height="100%">
          <text x="50%" y="60%" text-anchor="middle">
            Donations
          </text>
        </svg>
      </div>
      <h2 className="donationPage">
        Although DACA is active at the moment, pro-immigrant organizations worry
        for its future so here are some organizations you can donate to to help
        Dreamers.
      </h2>
      <ul className="scholarshipPage">
        <img src="butterfly.jpeg" />
        <h3>Donation Links Below</h3>
        <a
          href="https://www.raicestexas.org/ways-to-give/daca-fund/"
          target="_blank"
          className="donation-link"
        >
          The Refugee & Immigrant Center for Education & Legal Services
        </a>
        <hr />
        <a
          href="https://unitedwedream.org/"
          target="_blank"
          className="donation-link"
        >
          United We Dream
        </a>
        <hr />
        <a
          href="https://www.alientoaz.org/"
          target="_blank"
          className="donation-link"
        >
          Aliento
        </a>
        <hr />
        <a
          href="https://www.classy.org/campaign/protect-dreamers/c163415"
          target="_blank"
          className="donation-link"
        >
          Mission Asset Fund
        </a>
        <hr />
        <a
          href="https://www.ilrc.org/daca-manual?gclid=Cj0KCQjwp86EBhD7ARIsAFkgakiso7Oss1oTLyTJ8ep4Qqawc6QVdVUZ4exnzBefa7ywYEFBmlx9FPsaAmoSEALw_wcB"
          target="_blank"
          className="donation-link"
        >
          Immigration Legal Resource Center
        </a>
        <hr />
        <a
          href="https://www.lawyersforgoodgovernment.org/project-corazon-matamoros?gclid=Cj0KCQjwp86EBhD7ARIsAFkgakjptSnFp8Q6AmccqHcecUBING0J6FknPI0w8qdtvnNqFkPR6NvUCm4aAl6GEALw_wcB"
          target="_blank"
          className="donation-link"
        >
          Project Corazon
        </a>
        <hr />
        <a
          href="https://www.unidosus.org/issues/immigration/daca/"
          target="_blank"
          className="donation-link"
        >
          Unidos US
        </a>
        <hr />
      </ul>
    </>
  );
}
