import * as React from 'react';
import styles from './HolaWorld.module.scss';
import type { IHolaWorldProps } from './IHolaWorldProps';

export default class HolaWorld extends React.Component<IHolaWorldProps> {
  public render(): React.ReactElement<IHolaWorldProps> {
    const { hasTeamsContext } = this.props;

    return (
      <section className={`${styles.holaWorld} ${hasTeamsContext ? styles.teams : ''}`}>
        senior logadheep
      </section>
    );
  }
}
