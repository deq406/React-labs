import classnames from "classnames";
import React from "react";
import "./Form.css";
import PropTypes from "prop-types";
class SignUpEmail extends React.Component {
  constructor(props) {
    super(props);
  }
  isNormalEmail = () => {
    const email = this.emailInput?.value;
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const result = !re.test(email);
    console.log(re.test(email));

    return result;
  };
  render() {
    return (
      <div
        className={classnames("em", {
          enabled: !this.isNormalEmail(),
        })}
      >
        <label htmlFor="Email">{"Email:"}</label>
        <input
          ref={(element) => (this.emailInput = element)}
          id="Email"
          type={"email"}
          onInput={(result) => {
            this.props.func(this.isNormalEmail());
          }}
        ></input>
      </div>
    );
  }
}
SignUpEmail.propTypes = {
  func: PropTypes.func.isRequired, //func
};
export default SignUpEmail;
