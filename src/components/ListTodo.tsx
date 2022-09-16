import { useEffect, useState } from "react";
import { Card } from "./ListTodo.style";
import { Task } from "../Interfaces";

const ListTodo = () => {
    const [listTodo, setListTodo] = useState([])

    useEffect(() => {
        const listOnStorage = localStorage.getItem('task')
        if(listOnStorage) {
            setListTodo(JSON.parse(listOnStorage))
        }
    }, [])

    return (
        <div>
            {
                listTodo[0] &&
                listTodo.map((task: Task) => (
                    <Card>
                        <p>{task.name}</p>
                    </Card>
                ))
            }
        </div>
    );
};

export default ListTodo;