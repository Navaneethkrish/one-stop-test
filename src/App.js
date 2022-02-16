import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to one stop test application.</p>
        </header>
        <main className="App-main"></main>
        <footer className="App-footer">
          <div className="App-footer-brand">
            <div className="App-footer-social">
              <div>
                <a
                  href="https://www.facebook.com/TestDomeDoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/testdome/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin">facebook</i>
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/testdome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
