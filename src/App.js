import React from "react";
import Main from "./Components/LandingPage";

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default App;

/* import { useState } from "react";
import UseEffectWithCleanup from "./Session5/UseEffectWithCleanup.js";

export default function App() {
  const [enabled, setEnabled] = useState(false);
  const [userId, setUserId] = useState(1);
  const [msg, setMsg] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };

  const handleOptionChange = (e) => {
    setEnabled(e.target.checked);
  };

  return (
    <div>
      <input
        type="text"
        value={msg}
        onChange={(e) => handleMsgChange(e)}
        placeholder="Add a message"
      />
      <input
        type="number"
        value={userId}
        onChange={(e) => handleUserIdChange(e)}
      />
      <div>
        Show component
        <input
          type="checkbox"
          value={enabled}
          onChange={(e) => handleOptionChange(e)}
        />
        {enabled && <UseEffectWithCleanup userId={userId} msg={msg} />}
      </div>
    </div>
  );
}
 */
