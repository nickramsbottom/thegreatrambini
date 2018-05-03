import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    fortune: null,
  }

  getFortune = () => {
    axios.get('https://fortunecookieapi.herokuapp.com/v1/cookie')
      .then(res => this.setState({ fortune: res.data[0].fortune.message }))
      .catch(err => console.log(err));
  }

  render() {
    const { fortune } = this.state;

    return (
      <div className="layout">
        <div className="background" />
        <div className="frame__outer">
          <div className="dots">
            {fortune ?
              <div className="frame__inner">
                <div>
                  <h2><span className="quote__mark">&ldquo;</span>{ fortune }<span className="quote__mark">&rdquo;</span></h2>
                  <div className="spacer__large" />
                  <button onClick={this.getFortune}>Hit Me Again</button>
                </div>
              </div>
              :
              <div className="frame__inner">
                <div>
                  <h2>Receive words of wisdom from...</h2>
                  <div className="spacer" />
                  <h1>The Great Rambini</h1>
                  <div className="spacer__large" />
                  <button onClick={this.getFortune}>Let&#8217;s Go</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
