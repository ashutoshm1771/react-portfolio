import React from 'react';
import { Link} from "react-router-dom";
import Card from "./Card";
import Project from "./Project";
import "./Projects.css";

function Projects() {
    return (
        <div className="projects">
            <Link to="/">
                <Card
                    src=""
                    title="Back !!"
                />
            </Link>
            <Project class="grid-item" title="E-Tendering using Aadhar-Based OTP" link="https://github.com/ashutoshm1771/db126_cookie_army" />
                <Project class="grid-item" title="Slack Clone using React" link="https://slack-clone-c8380.web.app/" />
                <Project class="grid-item" title="AirBnb Clone using React" link="https://airbnb-clone-30677.web.app/" />
                <Project class="grid-item" title="Covid19 Inspector using React" link="https://covid-19-tracker-e4804.web.app/" />
                <Project class="grid-item" title="Air Pollution Hot-spot detection" link="https://github.com/ashutoshm1771/Air-Pollution-Hot-spot-Detection" />
                <Project class="grid-item" title="Alumni Student College Interface" link="https://github.com/ashutoshm1771/alumni-college-student-interface" />
                <Project class="grid-item" title="Online Crime Reporting System" link="https://github.com/ashutoshm1771/Crime-Reporting-System" />
        </div>
    )
}

export default Projects;