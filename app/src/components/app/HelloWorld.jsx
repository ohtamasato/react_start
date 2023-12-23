import React from "react";
import PropTypes from "prop-types";

import styles from "./HelloWorld.module.scss";

export default class HelloWorld extends React.Component {
  render () {
    return (
      <span className={styles.helloWorld}>
            {this.props.message}
        </span>
    )
  }
}

HelloWorld.propTypes = {
  message: PropTypes.string.isRequired,
};

HelloWorld.defaultProps = {
  message: "Hello world!",
};
