import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function EditDreamerPage(props){

  const location = useLocation()

  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState(location.state.dreamer)
  
  const formRef = useRef();

  useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateDreamer(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div class="patterns">
        <svg width="100%" height="100%">
          <text x="50%" y="60%" text-anchor="middle">
          Edit Dreamer
          </text>
        </svg>
      </div>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit} className="AddForm">
        <div className="form-group">
        <label>Full Name (required)</label>
          <input
            className="form-group"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Occupation (required)</label>
          <input
            className="form-group"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country of Origin</label>
          <input
            className="form-group"
            name="countryOfOrigin"
            value={formData.countryOfOrigin}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Languages spoken (required)</label>
          <input
            className="form-group"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Personal Link (required)</label>
          <input
            className="form-group "
            name="personalLink"
            value={formData.personalLink}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Your Story (required)</label>
          <input
            className="form-group aboutMeInput"
            name="aboutMe"
            value={formData.aboutMe}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-3"
          disabled={invalidForm}
        >
          SAVE DREAMER
        </button >&nbsp;&nbsp;
        <Link to='/' className="link"><button className="btn btn-3">CANCEL</button></Link>
      </form>
    </>
  );
}