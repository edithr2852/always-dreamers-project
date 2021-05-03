import React, { useState, useRef, useEffect } from 'react'

export default function AddDreamerForm(props){
  const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState({
		name: {type: String, required: true},
    occupation: {type: String, required: true},
    countryOfOrigin: {type: String, required: true},
    languages: {type: String, required: true},
    aboutMe: {type: String, required: true},
    personalLink: String
	});

  const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleAddDreamer(formData);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

  return(
    <>
    <main className="AddForm">
    <h1>Add Your Story</h1>
    <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name (required)</label>
          <input
            className="form-group"
            name="name"
            // value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Occupation (required)</label>
          <input
            className="form-group"
            name="occupation"
            // value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country of Origin</label>
          <input
            className="form-group"
            name="countryOfOrigin"
            // value={formData.countryOfOrigin}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Languages spoken (required)</label>
          <input
            className="form-group"
            name="languages"
            // value={formData.languages}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Personal Link (required)</label>
          <input
            className="form-group"
            name="personalLink"
            // value={formData.personalLink}
            onChange={handleChange}
            required
          />
        </div>
        <div className='aboutMeText'>
          <label>Your Story (required)</label>
          <textarea className="form-group aboutMeInput"
            name="aboutMe"
            // value={formData.aboutMe}
            onChange={handleChange}
            required>
          </textarea>
        
        </div>

        <button
          type="submit"
          className="btn"
          disabled={invalidForm}
        >
          ADD Dreamer Story
        </button>
      </form>
      </main>
    </>
  )
}