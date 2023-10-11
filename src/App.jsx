import React from "react";
import TimetableGenerator from "./Components/js/TimetableGenerator";
import "./App.css";

const App = () => {
  const timetable = {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    blocks: ["Block 1", "Block 2", "Block 3", "Break", "Block 4", "Block 5", "Block 6", "Break", "Block 7", "Block 8"],
    subjects : ["Maths", "English", "Life Sci", "Xhosa", "Art", "Tech", "Acc", "Science", "History", "Social Studies", "Music", "Comp sci"]

  };

  // Placeholder teachers array (ensure it has at least one teacher)
  const subjects = ["Maths", "English", "Life Sci", "Xhosa", "Art", "Tech", "Acc", "Science", "History", "Social Studies", "Music", "Comp sci"];
  const grade10ClassNames = ["10a", "10b", "10c"];

  return (
    <div>
       <h1>Timetable Generator</h1>
       {grade10ClassNames.map((className) => (
        <div key={className}>
          <h2>{`Grade ${className} Timetable`}</h2>
          <TimetableGenerator timetable={timetable} subjects={subjects} />
        </div>
      ))}
    </div>
  );
};

export default App;
