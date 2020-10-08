import React, {Component} from "react";
import "./Character.scss";
/* import Modal from "react-modal"; */
import {Button, Modal} from "react-bootstrap";
class Character extends Component {
  constructor() {
    super();
    this.state = {
      on: false,
    };
  }

  handleToggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    let {on} = this.state;
    let {character} = this.props;
    return (
      <div className="o-character">
        <div className="o-character-img">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name ? character.name : character.title}
          />
        </div>
        <div className="o-character-name">
          <h3>{character.name ? character.name : character.title}</h3>
        </div>
        <Button
          variant="none-outline"
          block
          className="o-button"
          onClick={this.handleToggle}
        >
          Comics
        </Button>
        <Modal show={on} 
               onHide={this.handleToggle} 
               centered size="lg"
               >
          <Modal.Header closeButton>
            Comics where this character appears
          </Modal.Header>
          <Modal.Body>
            <ul>
              {character.comics.items.map((comic) => (
                <li key={this.props.character.id}>
                <a href={comic.resourceURI}>{comic.name}</a>                  
                </li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" block onClick={this.handleToggle}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Character;
