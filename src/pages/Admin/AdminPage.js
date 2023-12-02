import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';

function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    if (authenticated) {
      const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin-login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: 'deepakjangid42145@gmail.com', password: 'deepak12' }),
          });

          if (response.ok) {
            const data = await response.json();
            setFormDataList(data);
          } else {
            console.error('Failed to fetch form data');
          }
        } catch (error) {
          console.error('Error occurred while fetching form data:', error);
        }
      };

      fetchData();
    }
  }, [authenticated]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true); // Set loading to true during login

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setAuthenticated(true);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      alert('Error occurred during login. Please try again.');
    } finally {
      setIsLoading(false); // Set loading back to false after login attempt
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/delete/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted data from the list
        setFormDataList((prevList) => prevList.filter((data) => data._id !== id));
        alert('Form data deleted successfully!');
      } else {
        alert('Failed to delete form data.');
      }
    } catch (error) {
      console.error('Error occurred during form data deletion:', error);
      alert('Error occurred during form data deletion. Please try again.');
    }
  };


  return (
    <div className=" container mt-5 deep">
      {!authenticated ? (
        <>
          <div className='container row1 row2'>
            <h2>Admin Login</h2>
            <label>Email: </label>
            <input type="email" value={email} onChange={handleEmailChange} />
            <br />
            <label>Password: </label>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <br />
            <button
              onClick={handleLogin}
              className="btn-login btn btn-primary mt-3 submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'Please wait...' : 'Login'}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className='container row1'>
            <h2 className="mb-4 text-center">Admin Page</h2>
            <div className="row">
              {formDataList.map((formData) => (
                <div key={formData._id} className="col-md-12 mb-4">
                  <Card style={{ width: '100%' }}>
                    <Card.Body>
                      <Card.Title>{formData.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{formData.email}</Card.Subtitle>
                      <Card.Text>{formData.message}</Card.Text>
                      <Button variant="danger" onClick={() => handleDelete(formData._id)}>
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminPage;
