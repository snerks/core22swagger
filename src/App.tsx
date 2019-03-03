import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

interface CurrencyViewModel {
  isoCode: string;
  symbol: string;
  name: string;
}

interface IAppState {
  currencies: CurrencyViewModel[];
}

class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = { currencies: [] };
  }

  componentDidMount() {
    this.getCurrencies();
  }

  getCurrencies() {
    fetch("/api/values")
      .then(response => {
        return response.json();
      })
      .then(currencies => {
        console.log(JSON.stringify(currencies));
        this.setState({ currencies });
      });
  }

  render() {
    return (
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.tsx</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      <div className="App">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>ISO Code</th>
                <th>Symbol</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.currencies.map(c => (
                <tr key={c.isoCode}>
                  <td>{c.isoCode}</td>
                  <td>{c.symbol}</td>
                  <td>{c.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
