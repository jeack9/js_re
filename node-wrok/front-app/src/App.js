import "./App.css";
import Toolbar from "./Event";

function Header({ color = "red", title, onChangeMode }) {
  const clickHandler = (event) => {
    event.preventDefault();
    console.log("aa");
  };
  return (
    <header>
      <h2 style={{ backgroundColor: color }} onClick={onChangeMode}>
        <a href="/" onClick={clickHandler}>
          {title}
        </a>
      </h2>
    </header>
  );
}

function Article({ content, fruits }) {
  return (
    <article>
      <h1>{content.title}</h1>
      <p>{content.body}</p>
      <ul>
        {fruits.map((fruit, idx) => (
          <li key={idx}>{fruit}</li>
        ))}
      </ul>
    </article>
  );
}

function Nav({ topics }) {
  const lis = topics.map((itme, idx) => <li key={idx}>{itme.title}</li>);
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Profile(props) {
  return <Avatar {...props} />;
}
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  return <img className="avatar" src="logo192.png" alt={person} width={size}></img>;
}
function App() {
  return (
    <div className="App">
      <Profile person="ddd" size="100" />
      <Header
        title="Web"
        onChangeMode={() => {
          console.log("change");
        }}
      />
      <Nav
        topics={[
          { id: 1, title: "html", body: "html is ..." },
          { id: 2, title: "css", body: "css is ..." },
          { id: 3, title: "java", body: "java is ..." },
        ]}
      />
      <Toolbar />
      <Article content={{ title: "good", body: "morning", name: "rachacha2" }} fruits={["바나나", "사과", "망고"]} />
    </div>
  );
}

export default App;
