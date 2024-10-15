import React from "react";
import "../styles/Seeker.css"

function Seeker({ seeker, onDelete }) {
    // Format the created_at date
    const formattedDate = new Date(seeker.created_at).toLocaleDateString("en-US");

    return (
        <div className="seeker-container">
            <h3 className="seeker-name">{seeker.name}</h3>
            <p className="seeker-description">{seeker.description}</p>
            <p className="seeker-email">Email: {seeker.email}</p>
            <p className="seeker-phone">Phone: {seeker.phone_number}</p>
            <p className="seeker-location">Location: {seeker.location}</p>
            <p className="seeker-job-title">Job Title: {seeker.job_title}</p>
            <p className="seeker-company">Current Company: {seeker.current_company}</p>
            <p className="seeker-skills">Skills: {seeker.skills.join(", ")}</p>
            <p className="seeker-languages">Languages: {seeker.languages.join(", ")}</p>
            <p className="seeker-certifications">Certifications: {seeker.certifications.join(", ")}</p>
            <p className="seeker-linkedin">LinkedIn: <a href={seeker.linkedin_url} target="_blank" rel="noopener noreferrer">{seeker.linkedin_url}</a></p>
            <p className="seeker-experience">Years of Experience: {seeker.experience_years}</p>
            <p className="seeker-education">Education Level: {seeker.education_level}</p>
            <p className="seeker-salary">Desired Salary: ${seeker.desired_salary}</p>
            <p className="seeker-availability">Availability: {seeker.availibility}</p>
            <p className="seeker-date">Created At: {formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(seeker.id)}>
                Delete
            </button>
        </div>
    );
}


export default Seeker