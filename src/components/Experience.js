import React from 'react'

const Experience = ({ experience }) => {console.log(experience);return (
  <ul>
    {experience
      ? experience.map((item, idx) => (
          <li key={idx}>
            <h2>
              {item.company}
            </h2>
            {item.title ? <h3>{item.title}</h3> : null}
            <ul>
              {item.details
                ? item.details.map((det, idx) => <li key={idx}>{det}</li>)
                : null}
            </ul>
          </li>
        ))
      : null}
  </ul>
)}

export default Experience
