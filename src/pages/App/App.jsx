import { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import DreamersPage from "../DreamersPage/DreamersPage";
import AddDreamerPage from "../AddDreamerPage/AddDreamerPage";
import DreamerStoryPage from "../DreamersStoryPage/DreamersStoryPage";
import EditDreamerPage from "../EditDreamerPage/EditDreamerPage";
import NavBar from "../../Components/NavBar/NavBar";
import DonationPage from "../DonationPage/DonationPage";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import ScholarshipPage from "../ScholarshipPage/ScholarshipPage";
import * as dreamerApi from "../../utilities/dreamers-api";

import "./App.css";

export default function App() {
  const [dreamers, setDreamers] = useState([]);
  const [user, setUser] = useState(getUser());
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, [dreamers, history]);

  useEffect(() => {
    async function getDreamers() {
      const dreamers = await dreamerApi.getAll();
      setDreamers(dreamers);
    }
    getDreamers();
  }, []);

  async function handleAddDreamer(newDreamerData) {
    const newDreamer = await dreamerApi.create(newDreamerData);
    setDreamers([...dreamers, newDreamer]);
  }

  async function handleUpdateDreamer(updatedDreamerData) {
    const updatedDreamer = await dreamerApi.update(updatedDreamerData);
    const newDreamersArray = dreamers.map((d) =>
      d._id === updatedDreamer._id ? updatedDreamer : d
    );
    setDreamers(newDreamersArray);
  }

  async function handleDeleteDreamer(id) {
    await dreamerApi.deleteOne(id);
    setDreamers(dreamers.filter((d) => d._id !== id));
  }

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Route exact path="/">
        <DreamersPage
          dreamers={dreamers}
          handleDeleteDreamer={handleDeleteDreamer}
        />
      </Route>
      <Route exact path="/stories">
        <DreamerStoryPage />
      </Route>
      <Route exact path="/aboutus">
        <AboutUsPage />
      </Route>
      <Route exact path="/scholarships">
        <ScholarshipPage />
      </Route>
      <Route exact path="/donations">
            <DonationPage />
          </Route>
      {user ? (
        <>
          <Route exact path="/add">
            <AddDreamerPage handleAddDreamer={handleAddDreamer} />
          </Route>
          <Route exact path="/edit">
            <EditDreamerPage handleUpdateDreamer={handleUpdateDreamer} />
          </Route>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
