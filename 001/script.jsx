var Hello = React.createClass({
  render: function() {
    var greetings = ["Hello", "Hi", "Welcome"];
    var names = ["Gerald", "Dan", "Trey", "Son", "Elijah"];

    var hellos = names.map(function(name, i){
      return <h1 key={i}>{greetings[i % greetings.length]} {names[i]}</h1>
    });
    return (
      <div>
        <h1>{hellos}</h1>
      </div>
    );
  }
})


React.render(
  <Hello />,
  document.getElementById("root")
);
