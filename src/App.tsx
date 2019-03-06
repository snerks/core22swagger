import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import logo from "./logo.svg";
import "./App.css";

import { Client, CurrencyGetViewModel } from "./Api.Client";

// interface CurrencyGetViewModel {
//   isoCode: string;
//   symbol: string;
//   name: string;
//   isDefault: boolean;
// }

interface IAppState {
  currencies: CurrencyGetViewModel[];
}

const columns = [
  {
    dataField: "isoCode",
    text: "ISO Code",
    sort: true
  },
  {
    dataField: "symbol",
    text: "Symbol",
    sort: true
  },
  {
    dataField: "name",
    text: "Name",
    sort: true
  },
  {
    dataField: "isDefault",
    text: "Is Default",
    sort: true
  }
];

class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = { currencies: [] };
  }

  componentDidMount() {
    // this.getCurrencies();
    const client = new Client();
    client.getAll().then(currencies => this.setState({ currencies }));
  }

  // getCurrencies() {
  //   fetch("/api/values")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(currencies => {
  //       console.log(JSON.stringify(currencies));
  //       this.setState({ currencies });
  //     });
  // }

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
          <BootstrapTable
            keyField="id"
            data={this.state.currencies}
            columns={columns}
          />
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
                  <option
                    key={c.isoCode}
                    value={c.isoCode}
                    title={c.name}
                    selected={c.isDefault}
                  >
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
