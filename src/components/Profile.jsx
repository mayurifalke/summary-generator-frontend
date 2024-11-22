import React, { useState } from "react";
import style from "./Profile.module.css";

function Profile() {
  // State to manage edit mode
  const [isEditable, setIsEditable] = useState(false);

  // State to store form data
  const [formData, setFormData] = useState({
    name: "XYZ",
    email: "xyz@example.com",
    userRole: "Web Developer",
    affiliation: "ABC Institute",
    projects: "EditVista, Solar Tracker",
  });

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className={style.content}>
      {/* Navbar top */}
     
        <div className={style.navbartop}>
          <div className={style.title}>
            <h1>Profile</h1>
          </div>
        </div>
        {/* End */}
        {/* Sidenav */}
        <div className={style.sidenav}>
          <div className={style.profile}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK4qEfbnd-RN82wdL2awn_PMviy_pelocqQ&s"
              alt=""
              width={100}
              height={100}
              className={style.pimg}
            />
            <div className={style.name}>XYZ</div>
            <div className={style.job}>Web Developer</div>
          </div>
          <div className={style.sidenavurl}>
            <div className={style.url}>
              <a href="#profile" className={style.active}>
                Profile
              </a>
              <hr align="center" />
            </div>
            <div className={style.url}>
              <a href="#settings">Settings</a>
              <hr align="center" />
            </div>
          </div>
        </div>
   
      {/* End */}

      
        <div className={style.main}>
          <h2>IDENTITY</h2>
          <div className={style.card}>
            <div className={style.cardbody}>
              <form>
                <table>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>:</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          readOnly={!isEditable}
                          className={style.inelemnt}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          readOnly={!isEditable}
                          className={style.inelemnt}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>User Role</td>
                      <td>:</td>
                      <td>
                        <input
                          type="text"
                          name="userRole"
                          value={formData.userRole}
                          onChange={handleChange}
                          readOnly={!isEditable}
                          className={style.inelemnt}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Affiliation</td>
                      <td>:</td>
                      <td>
                        <input
                          type="text"
                          name="affiliation"
                          value={formData.affiliation}
                          onChange={handleChange}
                          readOnly={!isEditable}
                          className={style.inelemnt}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Projects</td>
                      <td>:</td>
                      <td>
                        <input
                          type="text"
                          name="projects"
                          value={formData.projects}
                          onChange={handleChange}
                          readOnly={!isEditable}
                          className={style.inelemnt}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="ebtn">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={toggleEdit}
                  >
                    {isEditable ? "Save" : "Edit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default Profile;
