var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.greeting} {this.props.name}</h1>
      </div>
    );
  }
})

var App = React.createClass({
  render: function() {
    greetings = []
    var component = this
    collection = component.props.collection;
    var hellos = Object.keys(collection).map(function(name){
      return <Hello name={name} greeting={collection[name]} />
    });
    return (
      <div>
        <h1>React Example</h1>
        {{hellos}}
      </div>
    );
  }
});

React.render(
  <App collection={ {
    gerald: 'hi',
    ryan: 'hello',
    trey: 'yo'
  } }/>,
  document.getElementById("root")
);
