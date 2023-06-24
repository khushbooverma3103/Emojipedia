import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

function createEntry(emojip) {
  return (
    <Entry
      key={emojip.id}
      name={emojip.name}
      meaning={emojip.meaning}
      emoji={emojip.emoji}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
