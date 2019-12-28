import React from "react";
import TaskList from "../components/Task/TaskList";
import {tasks} from "../utils/mockdata";

const Home = () => {
    return <div>
        <TaskList tasks={tasks}/>
    </div>
};

export default Home;
