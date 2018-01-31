import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './card.scss';

const Card = ({
  className,
  children,
  onMouseEnter,
  onMouseLeave
}) => (
  <article
    className={cx(styles.Card, className)}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
    { children }
  </article>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default Card;
