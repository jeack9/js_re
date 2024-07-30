import { useState } from "react";
function Header({ children, title, onChangeMode }) {
  return (
    <>
      <header
        onClick={() => {
          window.event.preventDefault();
          onChangeMode("WELCOME");
        }}
      >
        <h1>
          <a href="/">
            {children} {title}
          </a>
        </h1>
      </header>
    </>
  );
}
function Nav({ topics, onChangeMode }) {
  return (
    <>
      <ol>
        {topics.map((topic) => {
          return (
            <li key={topic.id}>
              <a
                href={`/read/${topic.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onChangeMode("READ", topic.id);
                }}
              >
                {topic.title}
              </a>
              <p>{topic.body}</p>
            </li>
          );
        })}
      </ol>
    </>
  );
}
function Article({ title, body }) {
  return (
    <>
      <article>
        <h2>{title}</h2>
        {body}
      </article>
    </>
  );
}
function Update(props) {
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // tttttt
          props.onUpdate();
        }}
      >
        <p>
          <input name="title" placeholder="title" value={props.title} />
        </p>
        <p>
          <input name="body" placeholder="body" value={props.body} />
        </p>
        <p>
          <input value="update" type="submit" />
        </p>
      </form>
    </article>
  );
}

function Create({ onCreate }) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          onCreate(title, body);
        }}
      >
        <p>
          <input name="title" placeholder="title" />
        </p>
        <p>
          <input name="body" placeholder="body" />
        </p>
        <p>
          <input type="submit" value="create" />
        </p>
      </form>
    </article>
  );
}

export default function Book() {
  let [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "java", body: "java is ..." },
  ]);
  let [lastId, setLastId] = useState(topics.length + 1);
  let [mode, setMode] = useState("WELCOME");
  let [id, setId] = useState(2);
  let content;
  function handleChange(mode, _id = 2) {
    setMode(mode);
    setId(_id);
  }
  if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          setLastId(lastId + 1);
          setTopics([...topics, { id: lastId, title: _title, body: _body }]);
        }}
      ></Create>
    );
  } else if (mode === "UPDATE") {
    let { title, body } = topics.find((topic) => id === topic.id);
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(_id, _title, _body) => {
          let selectedTopic = topics.find((top) => top.id === _id);
          selectedTopic.title = _title;
          selectedTopic.body = _body;
        }}
      ></Update>
    );
  } else if (mode === "WELCOME") {
    content = (
      <>
        <Article title="WELCOME" body="Hello. WEB"></Article>
        <button onClick={() => setMode("CREATE")}>CREATE</button>
      </>
    );
  } else if (mode === "READ") {
    let { title, body } = topics.find((topic) => id === topic.id);
    content = (
      <>
        <Article title={title} body={body}></Article>
        <button
          onClick={() => {
            handleChange("UPDATE", id);
          }}
        >
          updates
        </button>
      </>
    );
  }
  return (
    <>
      <Header title="re" onChangeMode={handleChange}>
        안녕
      </Header>
      <Nav topics={topics} onChangeMode={handleChange}></Nav>
      {content}
    </>
  );
}
