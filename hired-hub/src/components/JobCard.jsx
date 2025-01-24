import React from "react";
import { assets } from "../assets/assets";

const JobCart = ({ job }) => {
    return(
        <div>
            <div>
                <img src={assets.company_icon} alt="Company Logo" />
            </div>
            <h4>{job.title}</h4>
            <div>
                <span>{job.location}</span>
                <span>{job.level}</span>
            </div>
            <p dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
            <div>
                <button>Apply now</button>
                <button>Learn more</button>
            </div>
        </div>
    )
}

export default JobCart;