import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([]);

    function handleClick() {
        const newTask = "Learn React";
        setTasks([...tasks, newTask]);
    }

    return (
        <div>
            <h1>My Task Board</h1>

            <button onClick={handleClick}>Add Task</button>

           <div>
    {tasks.map((task) => (
        <p>{task}</p>
    ))}
</div>
        </div>
    );
}

export default App;