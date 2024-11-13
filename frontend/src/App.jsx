import RightBar from "./components/RightBar";
import Header from "./components/Header";
import Music from "./components/Music";
function App() {
  return (
    <>
      <div className="bg-gradient-to-tr from-primary-dark  to-primary-dark2 w-full h-screen relative">
        <div>
          <RightBar />
        </div>
        <div className="ml-[22%] relative">
          <Header />
          <div className="mt-[5%]">
            <Music />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
