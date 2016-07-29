import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="greeting">
        <h1>Hey there!</h1>
        <p>You might be wondering what happened to Chatnon! July 25th, was this website's one year anniversary. To celebrate, this entire website will be rewritten from the ground up to be better and more exciting! Feedback is crucial, so if there is anything that bothers you, please yell at me.</p>
        <p>The rewrite will span multiple months and it will take a while for Chatnon to get back where it was. Check back soon, there will be updates everyday.</p>
        <p>There is a lot to do so if you can help out with code, don't hesitate to contribute! Progress will be slow starting out, but I hope to get chat working in a couple weeks. Thanks for your patience!</p>
        <p>This entire project is open sourced on <a href="https://github.com/brandonhuang/chatnon-2">Github</a>.</p>
        <p>- Brandon</p>

        <h2>Changelog</h2>
        <h3 className="date">8.28.2016</h3>
        <p className="change">Uploaded initial page and made everything pretty.</p>
      </div>
    );
  }
}

export default App;
