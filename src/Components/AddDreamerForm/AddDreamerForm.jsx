import React, { useState, useRef, useEffect } from "react";

export default function AddDreamerForm({ handleAddDreamer, user }) {
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    userId: user._id,
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    countryOfOrigin: { type: String, required: true },
    languages: { type: String, required: true },
    aboutMe: { type: String, required: true },
    personalLink: String,
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddDreamer(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div class="patterns">
        <svg width="100%" height="100%">
          <text x="50%" y="60%" text-anchor="middle">
            Add Your Story
          </text>
        </svg>
      </div>
      <form
        autoComplete="off"
        ref={formRef}
        onSubmit={handleSubmit}
        className="AddForm"
      >
        <div className="form-group">
          <label>Full Name (required)</label>
          <input
            className="form-group"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Occupation (required)</label>
          <input
            className="form-group"
            name="occupation"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country of Origin</label>
          <input
            className="form-group"
            name="countryOfOrigin"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Languages spoken (required)</label>
          <input
            className="form-group"
            name="languages"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Personal Link (required)</label>
          <input
            className="form-group"
            name="personalLink"
            onChange={handleChange}
            required
          />
        </div>
        <div className="story-input">
          <label>Your Story (required)</label>
          <textarea
            rows="15"
            cols="60"
            className="form-group"
            name="aboutMe"
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-3" type="submit" disabled={invalidForm}>
          ADD Dreamer Story
        </button>
      </form>
    </>
  );
}
