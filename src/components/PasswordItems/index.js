import React from 'react'

const PasswordItems = props => {
  const {passwordDetails, showPasswords, onDeletePasswordItems} = props
  const {website, name, password, id} = passwordDetails

  const onDeletePassword = () => {
    onDeletePasswordItems(id)
  }

  return (
    <li className="list-container">
      <div className="list-card">
        <p className="website-name">{website[0].toUpperCase()}</p>
        <p className="website-name">{website}</p>
        <p>{name}</p>
        <p>
          {showPasswords ? (
            password
          ) : (
            <img
              className="stars-logo"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
            />
          )}
        </p>
        <button onClick={onDeletePassword} data-testid="delete">
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItems
