var OneUserGreeting = React.createClass({
  render: function () {
    return <li>Hello {this.props.name}</li>;
  }
});


var Hello = React.createClass({
  getInitialState: function() {
    return { count: 1, users:[]}
  },
  greet: function() {
    this.setState(
      { users: this.state.users.concat(this.refs.name2greet.value)},
      function() {
        this.refs.name2greet.value = "";
      }
    );
  },
  componentWillMount: function() {
    console.log("will mount!")
  },
  componentDidMount: function() {
    console.log("Mounted!")
  },
  componentWillUnmount: function() {
    console.log("unmount!")
  },
  incrementing: function(){
    this.setState({
      count: this.state.count + 1
    })
  },
  render: function() {
    var usersLIs = this.state.users.map(function(name, i){
      return <OneUserGreeting name={name} key={i} />;
    });
    return (
      <div>
        <input placeholder="Name" ref="name2greet"/>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.incrementing}>{this.state.count}</button>
        <hr />
        <ul>
          {usersLIs}
        </ul>
      </div>
    );
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById("root")
);
