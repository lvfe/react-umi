import React from 'react';

export default class CComponent extends React.Component {
  state = {
    inputText: "",
  };
  onButtonClick(char:any) {
    // 代码写在这里↓↓↓↓↓

    this.setState((state) => {
      console.log(state);
      return { inputText: char };
    });

    // 代码写在这里↑↑↑↑↑
  }
  render() {
    return (
      <div>
        <input value={this.state.inputText} />
        {[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "0",
          "+",
          "-",
          "x",
          "/",
          "=",
        ].map((char) => (
          <button onClick={() => this.onButtonClick(char)}>{char}</button>
        ))}
      </div>
    );
  }
}
