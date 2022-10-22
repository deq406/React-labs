import React from "react";
import "./Form.css";
import classnames from "classnames";
import Progressbar from "./ProgressBar";
import PropTypes from "prop-types";
export default class SignUpPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
    this.StatePassword = this.StatePassword.bind(this);
  }

  handlePassword = () => {
    if (this.passInput?.value == null || this.passCheckInput?.value == null)
      return false;
    const passInput = this.passInput.value;
    const passCheckInput = this.passCheckInput.value;
    return passInput === passCheckInput ? true : false;
  };
  StatePassword = () => {
    this.setState({
      password: this.passInput?.value,
    });
  };
  render() {
    return (
      <div>
        <label htmlFor="password">{"Введите пароль:"}</label>
        <input
          ref={(element) => (this.passInput = element)}
          type={"password"}
          id="password"
          onChange={this.StatePassword}
        ></input>
        <Progressbar password={this.state.password}></Progressbar>
        <div
          className={classnames("pass", {
            validated: this.handlePassword(),
          })}
        >
          <label htmlFor="passcheck">{"Повторите пароль:"}</label>
          <input
            ref={(element) => (this.passCheckInput = element)}
            type={"password"}
            id="passcheck"
            onInput={(passResult) => this.props.func(!this.handlePassword())}
          ></input>
        </div>
      </div>
    );
  }
}
SignUpPassword.propTypes = {
  func: PropTypes.string.isRequired, //func
};
