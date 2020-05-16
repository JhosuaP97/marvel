import React from "react";
import "./Character.scss";
const Character = ({character}) => {
  return (
    <div className="o-character">
      <div className="o-character-img">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
      </div>
      <div className="o-character-name">
        <h3>{character.name}</h3>
      </div>
    </div>
  );
};

export default Character;
