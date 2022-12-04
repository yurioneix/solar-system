import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styles from './MissionCard.module.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className={ styles.card }>
        <h4 data-testid="mission-name" className={ styles.title }>{name}</h4>
        <hr />
        <div className={ styles.cardDiv }>
          <p data-testid="mission-year">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5 0C13.9971 0 14.4 0.402944
                14.4 0.9V1.8H15.3C16.7912 1.8 18 3.00883
                18 4.5V15.3C18 16.7912 16.7912 18 15.3
                18H2.7C1.20883 18 0 16.7912 0 15.3V4.5C0
                3.00883 1.20883 1.8 2.7 1.8H3.6V0.9C3.6
                0.402944 4.00294 0 4.5 0C4.99706 0 5.4
                0.402944 5.4 0.9V1.8H12.6V0.9C12.6 0.402944
                13.0029 0 13.5 0ZM13.5 10.8C13.9971 10.8 14.4
                11.2029 14.4 11.7V13.5C14.4 13.9971 13.9971
                14.4 13.5 14.4H11.7C11.2029 14.4 10.8
                13.9971 10.8 13.5V11.7C10.8 11.2029
                11.2029 10.8 11.7 10.8H13.5ZM3.6 3.6H2.7C2.20294
                3.6 1.8 4.00294 1.8 4.5V7.2H16.2V4.5C16.2
                4.00294 15.7971 3.6 15.3 3.6H14.4V4.5C14.4
                4.99706 13.9971 5.4 13.5 5.4C13.0029 5.4 12.6
                4.99706 12.6 4.5V3.6H5.4V4.5C5.4 4.99706
                4.99706 5.4 4.5 5.4C4.00294 5.4 3.6 4.99706
                3.6 4.5V3.6Z"
                fill="white"
              />
            </svg>

            {year}
          </p>
          <p data-testid="mission-country">
            <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.25789 0C3.24531 0 0 3.24531
                0 7.25789C0 11.9668 5.43138 18.6155 6.89712
                20.324C7.08998 20.5488 7.4258 20.5488 7.61866
                20.324C9.0844 18.6155 14.5158 11.9668 14.5158
                7.25789C14.5158 3.24531 11.2705 0 7.25789
                0ZM7.25789 9.84999C5.82705 9.84999 4.66579
                8.68873 4.66579 7.25789C4.66579 5.82705 5.82705
                4.66579 7.25789 4.66579C8.68873 4.66579 9.84999
                5.82705 9.84999 7.25789C9.84999 8.68873 8.68873
                9.84999 7.25789 9.84999Z"
                fill="white"
              />
            </svg>
            {country}

          </p>
          <p data-testid="mission-destination">
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.73671 2.81592C8.20915 2.81592 6.94756
                1.82439 5.02701 1.82439C4.31564 1.82439 3.67841
                1.94936 3.0873 2.16683C3.16923 1.95288 3.20409
                1.7238 3.18953 1.49517C3.13901 0.684566
                2.47451 0.0343684 1.66299 0.00135825C0.750995
                -0.0357568 0 0.692576 0 1.59634C0 2.13869
                0.270723 2.61757 0.684148
                2.90605V17.3191C0.684148 17.697 0.990447
                18.0033 1.3683 18.0033H1.8244C2.20224
                18.0033 2.50854 17.697 2.50854
                17.3191V11.22C3.31558 10.8761 4.32102 10.5894
                5.77065 10.5894C7.29824 10.5894 8.55981
                11.5809 10.4804 11.5809C11.8535 11.5809
                12.9509 11.1165 13.9725 10.4162C14.22 10.2466
                14.3671 9.96492 14.3671 9.66487V2.73502C14.3671
                2.06817 13.6753 1.62698 13.0705 1.90788C12.0917
                2.3625 10.8911 2.81592 9.73671 2.81592Z"
                fill="white"
              />
            </svg>

            {destination}
          </p>
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
