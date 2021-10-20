import { Article } from "./components/Article/Article";

function App() {
  return (
    <div className="App">
      <Article
        title="Главный заголовок статьи 1"
        subtitle="Подзаголовок статьи 1 "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit
        accusamus deleniti nesciunt quas, accusantium repellendus nostrum
        voluptatibus ipsam, perspiciatis quasi. Labore amet aperiam sint
        incidunt consequatur illo laudantium necessitatibus.
      </Article>
      <Article
        title="Главный заголовок статьи 2"
        subtitle="Подзаголовок статьи 2"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit
        accusamus deleniti nesciunt quas, accusantium repellendus nostrum
        voluptatibus ipsam, perspiciatis quasi. Labore amet aperiam sint
        incidunt consequatur illo laudantium necessitatibus.
      </Article>
      <Article
        title="Главный заголовок статьи 3"
        subtitle="Подзаголовок статьи 3"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit
        accusamus deleniti nesciunt quas, accusantium repellendus nostrum
        voluptatibus ipsam, perspiciatis quasi. Labore amet aperiam sint
        incidunt consequatur illo laudantium necessitatibus.
      </Article>
    </div>
  );
}

export default App;
