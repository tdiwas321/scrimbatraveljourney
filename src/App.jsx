import "./App.css";
import Navbar from "./Navbar";
import Content from "./components/content";
import data from "./data";

export default function App() {
  const blog = data.map((item) => {
    return <Content key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      {blog}
    </div>
  );
}
