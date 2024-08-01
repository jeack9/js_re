import { Routes, Route, NavLink, useParams, useRoutes } from "react-router-dom";
function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}
let contents = [
  { id: 1, title: "HTML", description: "HTML is.." },
  { id: 2, title: "JS", description: "JS is.." },
  { id: 3, title: "React", description: "React is.." },
  { id: 4, title: "TEST", description: "Test is.." },
];

function Topic() {
  let { topicId } = useParams();
  topicId = Number(topicId);
  let selectedTopic = { title: "sorry", description: "not found" };
  selectedTopic = contents.find((topic) => topicId === topic.id);
  return (
    <div>
      {selectedTopic.title}
      {selectedTopic.description}
    </div>
  );
}

function Topics() {
  let route = useRoutes([{ path: "/:topicId", element: <Topic /> }]);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {contents.map((ele) => {
          return (
            <li key={ele.id}>
              <NavLink to={`/topics/${ele.id}`}>{ele.title}</NavLink>
            </li>
          );
        })}
      </ul>
      {route}
      {/* <Routes>
        <Route path={`/:topicId`} element={<Topic />}></Route>;
      </Routes> */}
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  let route = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/topics/*",
      element: <Topics />,
      // children: [{ path: `:topicId`, element: <Topic /> }],
    },
    { path: "/contact", element: <Contact /> },
    { path: "/*", element: "404 err" },
  ]);
  return (
    <div className="App">
      <h1>Hello react router DOM</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/err"}>Error</NavLink>
        </li>
      </ul>
      {route}
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics/*" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element="404"></Route>
      </Routes> */}
    </div>
  );
}

export default App;
