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
      <span>Edit Dreamer</span>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
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
          <label>Your Story (required)</label>
          <input
            className="form-group"
            name="aboutMe"
            // value={formData.aboutMe}
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
        <button
          type="submit"
          className="btn btn-xs"
          disabled={invalidForm}
        >
          SAVE DREAMER
        </button>&nbsp;&nbsp;
        <Link to='/'>CANCEL</Link>
      </form>
    </>
  );
}