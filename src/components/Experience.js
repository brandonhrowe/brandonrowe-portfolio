import React from 'react'

const Experience = ({ experience }) => (
  <div>
    {experience
      ? experience.map((item, idx) => (
          <div key={idx}>
            <img src={item.logo} alt={item.company} className="logo" />
            <h3>{item.company}</h3>
            {item.title ? <h3>{item.title}</h3> : null}
            <ul>
              {item.details
                ? item.details.map((det, idx) => <li key={idx}>{det}</li>)
                : null}
            </ul>
          </div>
        ))
      : null}
  </div>
)

export default Experience
