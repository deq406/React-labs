import React from "react";
import Notes from "./Notes";
import "../index.css";
import InputMask from "react-input-mask";
import hocCalendar from "./Calendar";
class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      header: [],
      date: [],

      text: [],
      count: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }
  handleInput = () => {
    const val = this.headInput.value;
    const text = this.textar.value;
    const date = this.date.value;
    this.form.reset();
    if (date === "") {
      this.setState((prevState) => ({
        header: [...prevState.header, val],
        text: [...prevState.text, text],
        count: this.state.count + 1,
        date: [...prevState.date, new Date().toLocaleDateString()],
      }));
    } else {
      this.setState((prevState) => ({
        header: [...prevState.header, val],
        text: [...prevState.text, text],
        count: this.state.count + 1,
        date: [...prevState.date, date],
      }));
    }
  };
  deleteNote = (e) => {
    if (e.target.name === "firstDelete") {
      let copyHeader = Object.assign([], this.state.header);
      let copyText = Object.assign([], this.state.text);
      let copyDate = Object.assign([], this.state.date);
      let index = 0;
      copyHeader.splice(index, 1);
      copyText.splice(index, 1);
      copyDate.splice(index, 1);

      this.setState((prevState) => ({
        header: copyHeader,
        text: copyText,
        date: copyDate,
        count: this.state.count - 1,
      }));
    } else if (e.target.name === "lastDelete") {
      let copyHeader = Object.assign([], this.state.header);
      let copyText = Object.assign([], this.state.text);
      let copyDate = Object.assign([], this.state.date);
      let index = copyHeader.length;
      index--;
      copyHeader.splice(index, 1);
      copyText.splice(index, 1);
      copyDate.splice(index, 1);
      this.setState({
        header: copyHeader,
        text: copyText,
        date: copyDate,
        count: this.state.count - 1,
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form style={{ width: "fit-content" }} ref={(e) => (this.form = e)}>
          <fieldset>
            <legend>{"Заметки"}</legend>
            <label>{"Заголовок"}</label>
            <input
              type={"text"}
              name={"header"}
              ref={(e) => (this.headInput = e)}
            ></input>
            <label>{"Дата"}</label>
            <InputMask
              type={"text"}
              name={"date"}
              ref={(e) => (this.date = e)}
              mask={"99.99.9999"}
            ></InputMask>
            <label>{"Содержание"}</label>
            <textarea name="text" ref={(e) => (this.textar = e)}></textarea>
            <button type={"button"} onClick={this.handleInput}>
              {"Добавить Заметку"}
            </button>
            {this.state.count > 3 ? (
              <span>
                <button
                  type={"button"}
                  name={"firstDelete"}
                  onClick={this.deleteNote}
                >
                  {"Удалить первую заметку"}
                </button>
                <button
                  type={"button"}
                  name={"lastDelete"}
                  onClick={this.deleteNote}
                >
                  {"Удалить последнюю заметку"}
                </button>
              </span>
            ) : null}
          </fieldset>
        </form>
        <div>
          <Notes
            header={this.state.header}
            text={this.state.text}
            count={this.state.count}
            date={this.state.date}
          ></Notes>
        </div>
      </div>
    );
  }
}
export default hocCalendar(<Note></Note>);
