import React from "react";
import { useEffect, useState } from "react";
import { getUser } from "../../utilities/users-service";
import AddDreamerForm from "../../Components/AddDreamerForm/AddDreamerForm";
import AuthPage from "../AuthPage/AuthPage";

export default function AddDreamerPage({ user, handleAddDreamer }) {
  return (
    <>
      {user ? (
        <AddDreamerForm handleAddDreamer={handleAddDreamer} user={user} />
      ) : (
        <>
          <div className="addstorydiv">
            <h1 className="addstory">
              Please Login or Sign up to add your story
            </h1>
          </div>
          <section className="daca-img">
            <a href="/">
              <img
                src="https://powertotheposter-production.s3.amazonaws.com/uploads/defend-daca/AshleyLukashevsky-HereToStay.jpg?mtime=20171026181016"
                width="600"
                height="800"
              />
            </a>
            <a href="/">
              <img
                src="https://powertotheposter-production.s3.amazonaws.com/uploads/defend-daca/_1200xAUTO_fit_top-center_70/AshleyLukashevsky-Unafraid.jpg?mtime=20171026180952"
                width="600"
                height="800"
              />
            </a>
            <a href="/">
              <img
                src="https://remezcla.com///wp-content/uploads/2018/02/yocelynRiojas_myDreamsAreNotIllegal-1.jpg"
                width="600"
                height="800"
              />
            </a>
            <a href="/">
              <img
                src="https://pbs.twimg.com/media/Eaz-NNnVcAABDJW.jpg"
                width="600"
                height="800"
              />
            </a>
          </section>
        </>
      )}
    </>
  );
}
