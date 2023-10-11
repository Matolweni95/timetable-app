import React, { useState } from "react";

const TimetableGenerator = ({ timetable, subjects }) => {
  const [generatedTimetable, setGeneratedTimetable] = useState([]);

  const generateTimetable = () => {
    // Shuffle the subjects to ensure randomness
    const shuffledSubjects = [...subjects];
    for (let i = shuffledSubjects.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSubjects[i], shuffledSubjects[j]] = [shuffledSubjects[j], shuffledSubjects[i]];
    }

    // Define the subjects that should appear every day
    const subjectsToAppearEveryDay = ["Maths", "English", "Xhosa"];

    // Initialize the generated timetable with subjects
    const newGeneratedTimetable = {};

    // Iterate over the days in the timetable
    for (const day of timetable.days) {
      newGeneratedTimetable[day] = [];

      const usedSubjectsInRow = [];

      for (const block of timetable.blocks) {
        // Check if the block is a break
        if (block === "Break") {
          // If it's a break, add the text "Break" instead of a subject
          newGeneratedTimetable[day].push({
            block,
            subject: "Break",
          });
        } else {
          // Check if the subject is one of the subjects to appear every day
          let subject;
          if (subjectsToAppearEveryDay.includes(block)) {
            subject = block;
          } else if (block === "Maths" || block === "Physics") {
            // Allow Maths and Physics to appear in the same row
            subject = block;
          } else {
            // Use a shuffled subject, ensuring it's not repeated in the row
            subject = shuffledSubjects.find((subj) => !usedSubjectsInRow.includes(subj));
            usedSubjectsInRow.push(subject);
          }

          // Add the subject to the generated timetable
          newGeneratedTimetable[day].push({
            block,
            subject,
          });
        }
      }
    }

    // Set the generated timetable with subjects
    setGeneratedTimetable(newGeneratedTimetable);
  };

  return (
    <div>
     
      <button onClick={generateTimetable}>Generate Timetable</button>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            {timetable.blocks.map((block) => (
              <th key={block}>{block}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(generatedTimetable).map((day) => (
            <tr key={day}>
              <td>{day}</td>
              {generatedTimetable[day].map((blockAndSubject, j) => (
                <td key={j}>
                  {blockAndSubject.subject !== "Break"
                    ? blockAndSubject.subject
                    : "Break"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableGenerator;
