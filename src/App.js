import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItems from './components/PasswordItems'
import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    websiteName: '',
    userName: '',
    password: '',
    passwordList: [],
    showPasswords: false,
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website: websiteName,
      name: userName,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  onChangeWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onToggleShowPasswords = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }
  onDeletePasswordItems = id => {
    const {passwordList} = this.state
    const filteredProjectsList = passwordList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({passwordList: filteredProjectsList})
  }

  render() {
    const {
      searchInput,
      websiteName,
      userName,
      password,
      passwordList,
      showPasswords,
    } = this.state
    const searchResults = passwordList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className='app-container'>
        <img
          className='app-logo'
          alt='app logo'
          src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
        />
        <div className='password-container'>
          <div className='password-card'>
            <form onSubmit={this.onAddPassword}>
              <h1 className='heading-password'>Add New Password</h1>
              <div>
                <img
                  className='website-logo'
                  alt='website'
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png '
                />
                <input
                  type='text'
                  className='input-text'
                  placeholder='Enter Website'
                  value={websiteName}
                  onChange={this.onChangeWebsiteName}
                />
              </div>
              <div>
                <img
                  className='username-logo'
                  alt='username'
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png '
                />
                <input
                  type='text'
                  className='input-text'
                  placeholder='Enter Username'
                  value={userName}
                  onChange={this.onChangeUserName}
                />
              </div>
              <div>
                <img
                  className='password-logo'
                  alt='password manager'
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png '
                />
                <input
                  type='password'
                  className='input-text'
                  placeholder='Enter Password'
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <button type='submit'>Add</button>
            </form>
            <div className='password-image-card'>
              <img
                className='password-manager-image'
                alt='password manager'
                src='https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png '
              />
            </div>
          </div>

          <div className='password-details-container'>
            <h2>
              Your Passwords <span>({passwordList.length})</span>
            </h2>
            <input
              type='search'
              placeholder='Search'
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <div>
              <label>
                <input type='checkbox' onChange={this.onToggleShowPasswords} />
                Show Passwords
              </label>
            </div>

            {searchResults.length === 0 ? (
              <div>
                <img
                  src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
                  alt='no passwords'
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <ul>
                {searchResults.map(eachPassword => (
                  <PasswordItems
                    key={eachPassword.id}
                    passwordDetails={eachPassword}
                    showPasswords={showPasswords}
                    onDeletePasswordItems={this.onDeletePasswordItems}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
