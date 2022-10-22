import React from "react";
import "./Form.css";
import zxcvbn from "zxcvbn";
import PropTypes from "prop-types";

class Progressbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.password);
    const test = zxcvbn(this.props.password);
    const num = (test.score * 100) / 4;
    const funcProgressColor = () => {
      switch (test.score) {
        case 0:
          return "#828282";
        case 1:
          return "#EA1111";
        case 2:
          return "#FFAD00";
        case 3:
          return "#9b1158";
        case 4:
          return "#00b500";
        default:
          return "none";
      }
    };
    const ChangePassword = () => ({
      width: `${num}%`,
      background: funcProgressColor(),
      height: "7px",
    });

    return (
      <>
        <div className="progress">
          <div className="progress-bar" style={ChangePassword()}></div>
        </div>
      </>
    );
  }
}
const isPassword = (props, propName, componentName) => {
  const regex =
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
  console.log(props);
  if (!regex.test(props[propName])) {
    return new Error(
      `Invalid prop ${propName} passed to ${componentName}. Expected a valid email address.`
    );
  }
};
Progressbar.propTypes = {
  password: PropTypes.number.isRequired, //string
};

export default Progressbar;
