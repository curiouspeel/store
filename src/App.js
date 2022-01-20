import { useState } from 'react';
// import StoreFront from './components/StoreFront';
import NewStoreFront from './components/NewStoreFront';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginClick() {
    setIsLoggedIn(!isLoggedIn);
  }

  let result = <>
    <h2>Please Login</h2>
    <button
      className="ui-button"
      onClick={handleLoginClick}
    >
      Login
    </button>
  </>


  if (isLoggedIn) {
    result =
      <>
        <NewStoreFront />
        <button
          className="ui-button"
          onClick={handleLoginClick}
        >
          Logout
        </button>
      </>;
  }

  return (
    <div className="App">
      {result}
    </div>
  );
}

export default App;
