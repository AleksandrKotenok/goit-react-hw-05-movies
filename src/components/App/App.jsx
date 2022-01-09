import { Trending } from "../../API/api";

export default function App() {
  const apiData = async () => {
    try {
      const data = await Trending();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  apiData();
  return (
    <div className="App">
      <p>init</p>
    </div>
  );
}
