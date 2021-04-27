import React, { Component, Fragment } from "react";
import { MD5 } from "../../md5";
import Character from "../Character/Character";
import "./List.scss";

const endPoint = "http://gateway.marvel.com/v1/public/characters?";
const endPoint2 =
  "http://gateway.marvel.com/v1/public/characters?nameStartsWith";

let ts = Date.now();
const publicKey = "3dcc2e8fe3ef2af292dadf089641bff0";
const privateKey = "8f1162447366680c421192c5b4b02f8895a75b36";
const convert = ts + privateKey + publicKey;
let hash = MD5(convert);

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchCharacter: "",
      count: "",
      error: "",
    };
  }

  componentDidMount() {
    fetch(`${endPoint}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        this.setState({
          data: myJson.data.results,
        });
      });
  }

  handleSubmit(e) {
    let { searchCharacter } = this.state;
    e.preventDefault();
    if (!searchCharacter) {
      return this.setState({ error: "Please write something..." });
    }
    fetch(
      `${endPoint2}=${searchCharacter}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        if (myJson.data.results.length === 0) {
          return this.setState({
            error: "There's not results",
            data: [],
            count: null,
          });
        } else {
          this.setState({
            data: myJson.data.results,
            searchCharacter: "",
            count: myJson.data.count,
            error: "",
          });
        }
      });
  }

  render() {
    let { data, searchCharacter, count } = this.state;
    return (
      <Fragment>
        {count ? (
          <div className="o-count">
            <h4>Results found: {count} </h4>
          </div>
        ) : null}
        <div className="o-list-container">
          <div className="o-mesagge">
            <h2>Search your favorite Marvel Character</h2>
          </div>
          <div className="o-search">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input
                type="text"
                placeholder="Search character"
                onChange={(e) =>
                  this.setState({ searchCharacter: e.target.value })
                }
                value={searchCharacter}
                autoFocus
              />
            </form>
            <p className="o-error">
              {this.state.error ? this.state.error : ""}
            </p>
          </div>

          <div className="o-list-ch">
            {data.map((character) => (
              <Character character={character} key={character.id} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default List;
