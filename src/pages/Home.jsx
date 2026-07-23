import TaskForm from "../components/TaskForm"
import TodoContextProvider from '../context/TodoContextProvider';
import TaskCard from "../components/TaskCard";

export default function Home() {
  return (
    <div id="home">
        <TaskForm />
        <TaskCard />
    </div>
  )
}


