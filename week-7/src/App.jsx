import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./components/store/atoms/count";
import {
  Assgnment1,
  Assignment2,
  Assignment3,
  Assignment4,
} from "./components";

function App() {
  return (
    <div>
      <RecoilRoot>
        {/* <Count /> */}
        <Assgnment1 />
        <Assignment2 />
        <Assignment3 />
        <Assignment4 />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("Count Component re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <EvenCountRender />
    </div>
  );
}
function CountRenderer() {
  console.log("ContRender re-render");
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function EvenCountRender() {
  const count = useRecoilValue(evenSelector);
  return <div>{count % 2 === 0 ? " It is Even" : null}</div>;
}

function Buttons() {
  console.log("Button Component re-render");
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
