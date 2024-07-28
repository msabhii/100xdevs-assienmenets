import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { userAtomFamily, userInputAtom } from "../atom";

const Assignment4 = () => {
  const [inputValue, setInputValue] = useRecoilState(userInputAtom);
  const userLoadable = useRecoilValueLoadable(userAtomFamily(inputValue));

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={handleChange}
            value={inputValue}
          />
          <button onClick={handleSubmit}>Submit</button>
          {userLoadable.state === "loading" && <div>Loading...</div>}
          {userLoadable.state === "hasError" && (
            <div>Error: {userLoadable.contents.message}</div>
          )}
          {userLoadable.state === "hasValue" && userLoadable.contents && (
            <div>
              <h2>User Info:</h2>
              <p>Username: {userLoadable.contents.login}</p>
              <p>Name: {userLoadable.contents.name}</p>
              <p>Bio: {userLoadable.contents.bio}</p>
              <p>Location: {userLoadable.contents.location}</p>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default Assignment4;
