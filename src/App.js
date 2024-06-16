import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      setTasks([...tasks, value]);
      setValue(""); 
    }
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className='flex justify-center bg-stone-700'>
        <form onSubmit={handleSubmit}>
          <input
            className="added-input"
            type='text'
            placeholder='Enter task'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="add-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mx-2 rounded-full"
          >
            Add
          </button>
        </form>
      </div>

      <div className="my-5 bg-stone-500 rounded-sm">
        <h4 className="text-center text-lime-500">Added tasks</h4>
        <ul className="my-5 text-center">
          {tasks.map((task, index) => (
            <li key={index} className="task-item flex justify-center items-center mx-4 my-2">
              <span className="mr-4">{task}</span>
              <button
                onClick={() => handleDelete(index)}
                className="delete-btn bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-4 rounded-full"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
