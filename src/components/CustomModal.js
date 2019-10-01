import React from 'react'

const CustomModal = ({ data, currentView, isModal }) => {
  return isModal ? (
    <div className="modal">
      <img src={data.thumbnail} alt={data.caption} />
      <div className="modal-info">
        <div className="modal-links">
          <a href={data.link} className="button">
            Link <span className="icon fa-globe"></span>
          </a>
          <a href={data.github} className="button">
            GitHub <span className="icon fa-github"></span>
          </a>
          <a href={data.supplement.link} className="button">
            {data.supplement.name}{' '}
            <span className={`icon fa-${data.supplement.site}`}></span>
          </a>
        </div>
        <div>{data.long_desc}</div>
        <div>
          <u>STACK USED:</u>
          <ul className="stack-list">
            {data.stack &&
              data.stack.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  ) : null
}

export default CustomModal
