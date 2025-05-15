import { useState } from 'react';
import { db } from './firebase'; // Import Firestore from firebase.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


function AddHabitForm() {
  const [habit, setHabit] = useState(""); // State for the input value

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the habit input is not empty
    if (habit.trim()) {
      try {
        // Add the new habit to Firestore
        await addDoc(collection(db, "habits"), {
          name: habit,
          createdAt: serverTimestamp(),
        });
        
        console.log("Habit added:", habit);
        setHabit(""); // Clear the input field after submission
      } catch (error) {
        console.error("Error adding habit: ", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter your habit"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default AddHabitForm;