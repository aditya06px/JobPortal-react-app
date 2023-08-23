import React from 'react'
import "./ApplicationList.css"
const ApplicationList = () => {
    return (
        <div> <div class="container">
            <h2>Your Job Applications</h2>
            <div class="application">
                <h3>Full Stack Developer</h3>
                <div class="application-info">
                    <p>Company: XYZ Tech</p>
                    <p class="salary">Salary: $80,000/year</p>
                </div>
                <div class="application-info">
                    <p>Position: Full-time</p>
                    <p class="date">Application Date: July 15, 2023</p>
                </div>
                <button class="application-btn">Applied</button>
            </div>
            <div class="application">
                <h3>Frontend Developer</h3>
                <div class="application-info">
                    <p>Company: ABC Solutions</p>
                    <p class="salary">Salary: $70,000/year</p>
                </div>
                <div class="application-info">
                    <p>Position: Part-time</p>
                    <p class="date">Application Date: August 2, 2023</p>
                </div>
                <button class="application-btn">Applied</button>
            </div>
        </div></div>
    )
}

export default ApplicationList