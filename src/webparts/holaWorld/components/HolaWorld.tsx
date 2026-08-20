import * as React from 'react';
import styles from './HolaWorld.module.scss';
import type { IHolaWorldProps } from './IHolaWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HolaWorld extends React.Component<IHolaWorldProps> {
  public render(): React.ReactElement<IHolaWorldProps> {
    const { hasTeamsContext, userDisplayName, environmentMessage } = this.props;

    return (
      <section className={`${styles.holaWorld} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcomeCard}>
          <div className={styles.badge}>lead logadheep</div>
          <h1 className={styles.title}>Welcome{userDisplayName ? `, ${escape(userDisplayName)}` : ''}</h1>
          {environmentMessage && <p className={styles.subtitle}>{environmentMessage}</p>}
        </div>
      </section>
    );
  }
}
