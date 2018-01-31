import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './card.scss';

const Card = ({
  className,
  children
}) => (
  <article
    className={cx(styles.Card, className)}>
    { children }
  </article>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
