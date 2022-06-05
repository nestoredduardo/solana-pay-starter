import React from 'react';
import HeadComponent from '../components/Head';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  return (
    <div className="App">
      <HeadComponent />
      <div className="container">
        <header className="header-container">
          <p className="header"> 😳 Game NFTs Store 😈</p>
          <p className="sub-text">NFTs for all the worlds you'll explore</p>
        </header>

        <main>
          <img
            src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif"
            alt="emoji"
          />
        </main>

        <div className="footer-container">
          <img
            alt="Twitter Logo"
            className="twitter-logo"
            src="twitter-logo.svg"
          />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
