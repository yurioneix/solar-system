import React, { Component } from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
import styles from './SolarSystem.module.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul className={ styles.container }>
          {planets
            .map(
              (planet) => (
                <li key={ planet.name }>
                  <PlanetCard
                    planetName={ planet.name }
                    planetImage={ planet.image }
                  />
                </li>
              ),
            )}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
