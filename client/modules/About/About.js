import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <h2 className={styles['about-title']}>build with mern.io</h2>
        <p className={styles['about-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus a nulla id tincidunt. Proin facilisis pretium odio vulputate faucibus. Nulla.</p>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
