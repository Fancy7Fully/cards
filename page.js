'use strict';

const e = React.createElement;

class InputPage extends React.Component {
  render() {
    return (
      React.createElement("form", null, 
        React.createElement("div", null, React.createElement("label", {
        htmlFor: "Score"
      }, "\u8F6E\u7A7A\u5927\u5206:"), React.createElement("input", {
        type: "number",
        id: "Score",
        name: "score_setting",
        value: this.props.state.sitoutScore,
        onChange: function() {this.props.onChange();}
      })),
        React.createElement("div", null, React.createElement("label", {
        htmlFor: "Rounds"
      }, "\u8F6E\u7A7A\u5C0F\u5206:"), React.createElement("input", {
        type: "number",
        id: "Bonus",
        name: "bonus_setting",
        value: this.props.state.sitoutBonus,
        onChange: function() {this.props.onChange();}
      })), 
        React.createElement("div", null, React.createElement("label", {
        htmlFor: "Rounds"
      }, "\u603B\u8F6E\u6570:"), React.createElement("input", {
        type: "number",
        id: "Rounds",
        name: "rounds_setting",
        value: this.props.state.totalRounds,
        onChange: function() {this.props.onChange();}
      })), 
        React.createElement("div", null, React.createElement("label", {
        htmlFor: "Names>"
      }, "\u540D\u5355\u6587\u4EF6:"), React.createElement("input", {
        type: "file",
        id: "Names",
        name: "Names_setting",
        value: this.props.state.nameFile,
        onChange: function() {this.props.onChange();}
      }))));
    }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRounds: 0,
      sitoutBonus: 0,
      sitoutScore: 0,
      nameFile: null,
    };
  }

  handleChange(event) {
    switch (event.target) {
      case 'Rounds':
        this.setState({
          totalRound: event.target.value,
        });
        break;
      case 'Score':
        this.setState({
          sitoutBonus: event.target.value,
        });
        break;
      case 'Bonus':
        this.setState({
          sitoutBonus: event.target.value,
        });
        break;
      case 'Names':
        this.setState({
          nameFile: event.target.value,
        });
        break;
    }
  }

  render() {
    return (
    e(InputPage, {
      state: this.state,
      onChange: function() {this.handleChange();},
    })
  );
  }
}

ReactDOM.render(
  e(Page),
  document.getElementById('page')
);