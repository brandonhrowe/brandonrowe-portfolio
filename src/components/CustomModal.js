import React from 'react'

const CustomModal = ({ data, currentView, isModal }) => {
  return isModal ? (
    <div className="modal">
      <img src={data.thumbnail} alt={data.caption} />
      <div className="modal-info">
        <div>{currentView.long_desc}</div>
        <div>
          <u>STACK USED:</u>
          <ul className="stack-list">
            {data.stack &&
              data.stack.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <div>EXTRA LINKS HERE</div>
      </div>
    </div>
  ) : null
}

export default CustomModal
