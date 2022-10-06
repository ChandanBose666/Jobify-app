import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const { user, updateUser, displayAlert, showAlert, isLoading } =
    useAppContext();
  const [values, setValues] = useState(user);

  const {name, email, lastName, location} = values;
//   const [email, setEmail] = useState(user?.email);
//   const [lastName, setLastName] = useState(user?.lastName);
//   const [location, setLocation] = useState(user?.location);

const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({
      name,
      email,
      lastName,
      location,
    });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            labelText="Name"
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />
          <FormRow
            labelText="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            handleChange={handleChange}
          />
          <FormRow
            labelText="Email"
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
          />
          <FormRow
            labelText="Location"
            type="text"
            name="location"
            value={location}
            handleChange={handleChange}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading
              ? "Please wait... Saving your changes"
              : "Confirm changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
