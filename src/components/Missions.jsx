import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import styles from './Missions.module.css';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className={ styles.container }>
        <Title headline="MISSÕES" />
        <ul className={ styles.cards }>
          {missions
            .map((mission) => (
              <li key={ mission.name } className={ styles.missions }>
                <MissionCard
                  name={ mission.name }
                  year={ mission.year }
                  country={ mission.country }
                  destination={ mission.destination }
                />
              </li>
            ))}

        </ul>
      </div>
    );
  }
}

export default Missions;
