import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styles from './MissionCard.module.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className={ styles.card }>
        <h4 data-testid="mission-name">{name}</h4>
        <div className={ styles.cardDiv }>
          <p data-testid="mission-year">{year}</p>
          <p data-testid="mission-country">{country}</p>
          <p data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: Proptypes.string.isRequired,
  year: Proptypes.string.isRequired,
  country: Proptypes.string.isRequired,
  destination: Proptypes.string.isRequired,
};

export default MissionCard;
