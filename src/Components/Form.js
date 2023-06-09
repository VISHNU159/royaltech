import React, { useState } from 'react';
import './RegistrationForm.css';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({

    name: '',
   email: '',
   password:'',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name,value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
   await createdata();
   setFormData({
    name: '',
    email: '',
    password: '',
  })
  }
  const createdata = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/data', formData);
      console.log(response);
      alert('login Successfully Submitted');
      setError('');
    } catch (error) {
      console.error(error);
      alert('Error submitting login');
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };
 
  return (
   
       
    <div className="registration-container">
    <div class="text">
   <h1> BE A MEMBER IN OUR ROYAL FAMILY </h1> 
   <img
          src="https://img.freepik.com/premium-photo/close-up-green-registration-button-black-keyboard-placed-blurry-wooden-desktop-concept-3d-rendering_670147-11714.jpg"
        alt='img'  class="img-fluid"
        />
</div>
     
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
        <h2>Registration Form</h2>
          <label htmlFor="name">Name:</label>
          <input
                    type="text"
                    id="name"
                    className='inpl'
                    name="name"
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-aos="fade-right"
                  />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
                    type="email"
                    id="email"
                    className='inpl'
                    name="email"
                    placeholder='Your Name'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-aos="fade-right"
                  />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
                    type="password"
                    id="password"
                    className='inpl'
                    name="password"
                    placeholder='Your Name'
                    value={formData.password}
                    onChange={handleChange}
                    required
                    data-aos="fade-right"
                  />
        </div>
       
        <div className="form-group">
              <button type="submit" disabled={submitting} data-aos="fade-up">
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
                {error && <p>{error}</p>}
              </div>
              
      </form>  
    </div>
   

  );
};

export default RegistrationForm;
