import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import AddHabitForm from "./AddHabitForm";

import Header from "./Components/header";



function App() {
  const [habits, setHabits] = useState([]);

  // Fetch habits from Firestore on component mount
  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const habitsRef = collection(db, "habits");
        const snapshot = await getDocs(habitsRef);
        const habitsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHabits(habitsList);
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    };

    fetchHabits();
  }
  , []);

  return (
    <div>
      <h1>Your Habits</h1>
      <AddHabitForm />
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
     
    </div>
  );
  
}

export default App;