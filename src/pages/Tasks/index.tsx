import * as React from "react";
import "./style.scss";
import TopBar from "../../components/TopBar";

export default function Tasks() {
  const [newTask, setNewTask] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const handleAddTask = () => {
    if (newTask !== "") {
      let _tasks = [...tasks];
      _tasks.push({
        name: newTask,
        status: false,
      });
      setTasks(_tasks);
      setNewTask("");
    }
    return false;
  };

  const handleControlTask = (index: number) => {
    let _tasks = [...tasks];
    _tasks[index] = {
      ..._tasks[index],
      status: !_tasks[index].status,
    };
    setTasks(_tasks);
  };

  const handleRemoveTask = (index: number) => {
    let _tasks = [...tasks];
    _tasks.splice(index, 1);
    setTasks(_tasks);
  };

  let taskDone = tasks.filter((item) => item.status === true).length || 0;

  return (
    <div className="container">
      <TopBar backStatus={true} headingName="Todo list" />
      <div className="tasks">
        <div className="input-primary">
          <input
            type="text"
            placeholder="Search"
            name="newTask"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTask();
              }
            }}
          />
          <span onClick={handleAddTask}>Add</span>
        </div>
        <div className="tasks-content">
          <div className="tasks-inform">
            There are <span className="tasks-done">{taskDone}</span> tasks left
            out of <span className="tasks-total">{tasks.length}</span> tasks
          </div>
          <ul className="tasks-list">
            {tasks.length > 0 &&
              tasks.map((task, index) => (
                <li key={index}>
                  <p
                    className={task.status ? "done" : ""}
                    onClick={() => handleControlTask(index)}
                  >
                    {task.name}
                  </p>
                  <span
                    className="remove"
                    onClick={() => handleRemoveTask(index)}
                  >
                    x
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
