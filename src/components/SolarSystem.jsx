import React, { Component } from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets
          .map(
            (planet) => (
              <PlanetCard
                planetName={ planet.name }
                planetImage={ planet.image }
                key={ planet.name }
              />
            ),
          )}
      </div>
    );
  }
}

export default SolarSystem;
