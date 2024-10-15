import { useState, useEffect } from "react";
import Seeker from "../components/Seeker"
import api from "../api";
import "../styles/Home.css"

function Home() {
    const [seekers, setSeekers] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [currentCompany, setCurrentCompany] = useState("");
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [linkedinUrl, setLinkedinUrl] = useState("");
    const [experienceYears, setExperienceYears] = useState(0);
    const [educationLevel, setEducationLevel] = useState("");
    const [desiredSalary, setDesiredSalary] = useState(0);
    const [availibility, setAvailibility] = useState("");

    useEffect(() => {
        getSeekers();
    }, []);

    const getSeekers = () => {
        api
            .get("/rc_app/seekers/")
            .then((res) => res.data)
            .then((data) => {
                setSeekers(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteSeeker = (id) => {
        api
            .delete(`/rc_app/seekers/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Seeker deleted!");
                else alert("Failed to delete Seeker.");
                getSeekers();
            })
            .catch((error) => alert(error));
    };

    const createSeeker = (e) => {
        e.preventDefault();
        api
            .post("/rc_app/seekers/", {
                name,
                description,
                email,
                phone_number: phoneNumber,
                location,
                job_title: jobTitle,
                current_company: currentCompany,
                skills,
                languages,
                certifications,
                linkedin_url: linkedinUrl,
                experience_years: experienceYears,
                education_level: educationLevel,
                desired_salary: desiredSalary,
                availibility,
            })
            .then((res) => {
                if (res.status === 201) alert("Seeker created!");
                else alert("Failed to make seeker.");
            })
            .catch((err) => {
                console.error("Error response:", err.response?.data);  // Log the detailed error
                alert(err.response?.data || "An error occurred");       // Show an alert with the error details
            });
        getSeekers();  // Updated from getSeeker()    
    };

    return (
        <div>
            <h2>Seeker Profiles</h2>
            <div>
                {seekers.map((seeker) => (
                    <Seeker seeker={seeker} onDelete={deleteSeeker} key={seeker.id} />
                ))}
            </div>

            <h2>Create a Seeker Profile</h2>
            <form onSubmit={createSeeker}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <label htmlFor="jobTitle">Job Title:</label>
                <input
                    type="text"
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                />

                <label htmlFor="currentCompany">Current Company:</label>
                <input
                    type="text"
                    id="currentCompany"
                    value={currentCompany}
                    onChange={(e) => setCurrentCompany(e.target.value)}
                />

                <label htmlFor="skills">Skills (comma separated):</label>
                <input
                    type="text"
                    id="skills"
                    value={skills.join(", ")}
                    onChange={(e) => setSkills(e.target.value.split(", "))}
                />

                <label htmlFor="languages">Languages (comma separated):</label>
                <input
                    type="text"
                    id="languages"
                    value={languages.join(", ")}
                    onChange={(e) => setLanguages(e.target.value.split(", "))}
                />

                <label htmlFor="certifications">Certifications (comma separated):</label>
                <input
                    type="text"
                    id="certifications"
                    value={certifications.join(", ")}
                    onChange={(e) => setCertifications(e.target.value.split(", "))}
                />

                <label htmlFor="linkedinUrl">LinkedIn URL:</label>
                <input
                    type="url"
                    id="linkedinUrl"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                />

                <label htmlFor="experienceYears">Years of Experience:</label>
                <input
                    type="number"
                    id="experienceYears"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(parseInt(e.target.value))}
                />

                <label htmlFor="educationLevel">Education Level:</label>
                <select
                    id="educationLevel"
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}
                >
                    <option value="">Select Education Level</option>
                    <option value="PhD">PhD</option>
                    <option value="Bachelor">Bachelor's Degree</option>
                    <option value="HighSchool">High School Diploma</option>
                </select>

                <label htmlFor="desiredSalary">Desired Salary:</label>
                <input
                    type="number"
                    id="desiredSalary"
                    value={desiredSalary}
                    onChange={(e) => setDesiredSalary(parseInt(e.target.value))}
                />

                <label htmlFor="availibility">Availability:</label>
                <input
                    type="text"
                    id="availibility"
                    value={availibility}
                    onChange={(e) => setAvailibility(e.target.value)}
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Home;
