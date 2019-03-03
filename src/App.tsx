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
      <div className="App container-fluid">
        <div>
          <form>
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="currenciesSelect">Currencies</label>
              <select className="form-control" id="currenciesSelect">
                {this.state.currencies.map(c => (
                  <option key={c.isoCode} value={c.isoCode} title={c.name}>
                    {c.symbol} ({c.isoCode})
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">
                Example multiple select
              </label>
              <select
                multiple
                className="form-control"
                id="exampleFormControlSelect2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
              />
            </div> */}
          </form>
          {/* <select>
            {this.state.currencies.map(c => (
              <option key={c.isoCode} value={c.isoCode} title={c.name}>
                {c.symbol}
              </option>
            ))}
          </select> */}
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
