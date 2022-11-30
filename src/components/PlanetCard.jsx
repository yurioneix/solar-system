import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlanetCard.module.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const name = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name" className={ styles.namePlanet }>{ planetName }</p>
        <img src={ planetImage } alt={ name } className={ styles.imageSize } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
