import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const createTodo = (event) => {
    event.preventDefault();
    if (text.trim() === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  const editTodo = (index) => {
    const selectedTodo = todos[index];
    setText(selectedTodo);
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <section className="w-full h-screen flex flex-col">
        <div className="w-full h-16 bg-violet-600 text-white flex justify-center items-center px-2">
          <span className="text-3xl">React Todo List</span>
        </div>

        <div className="w-full h-[calc(100%-64px)]">
          <div className="w-full h-fit flex pt-10 justify-center items-center flex-col">
            <div className="form w-1/2 h-full flex justify-center items-center p-4">
              <form
                className="max-w-sm mx-auto w-full h-full flex justify-center items-center"
                onSubmit={createTodo}
              >
                <div className="w-full flex gap-4 h-full justify-center items-center">
                  <input
                    type="text"
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter Todo"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="w-1/2 h-full flex">
              <div className="relative overflow-auto  w-full border rounded-md shadow-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed h-[calc(100%-64px)] ">
                  <thead>
                    <tr className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                      <th scope="col" className="px-6 py-3 w-1/4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-3 w-1/2">
                        Todo
                      </th>
                      <th scope="col" className="px-6 py-3 w-1/4 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {todos.map((todo, index) => (
                      <tr key={index} className="bg-white dark:bg-gray-800">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            {/* <input
                              id={`checkbox-${index}`}
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            /> */}
                            <span>{index + 1}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">{todo}</td>
                        <td className="px-6 py-4 flex justify-between">
                          <button
                            className="bg-gray-600 hover:bg-gray-700 text-white font-bold p-2 rounded"
                            onClick={() => editTodo(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                              />
                            </svg>
                          </button>
                          <button
                            className="bg-red-600 hover:bg-red-700 text-white font-bold p-2 rounded"
                            onClick={() => deleteTodo(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;

// onClick={() => deleteTodo(index)}
