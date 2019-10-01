import React from 'react'

const CustomModal = ({ data, currentView, isModal }) => {
  return isModal ? (
    <div className="modal">
      <img src={data.thumbnail} alt={data.caption} />
      <div className="modal-info">
        <div>{currentView.long_desc}</div>
        <div>STACK HERE</div>
        <div>EXTRA LINKS HERE</div>
      </div>
    </div>
  ) : null
}

export default CustomModal
