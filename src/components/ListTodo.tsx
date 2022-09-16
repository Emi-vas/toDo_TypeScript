import { useEffect, useState } from "react";
import { Card } from "./ListTodo.style";
import { Task } from "../Interfaces";
import { calculTime } from "../fonctions/calculTime"

interface Props {
    refreshList: boolean
}

const ListTodo = ({refreshList}: Props) => {
    const [listTodo, setListTodo] = useState([])

    const leftTime = (deadline :string): string => {
        let dateTs = Date.now()
        let date = new Date(dateTs).toLocaleTimeString()
        return calculTime(date, deadline)
    }

    const removeTask = (task : Task): void => {
        let newTab = listTodo.filter((item: Task) => item.name != task.name)
        setListTodo(newTab)
    }

    useEffect(() => {
        const listOnStorage = localStorage.getItem('task')
        if(listOnStorage) {
            setListTodo(JSON.parse(listOnStorage))
        }
    }, [refreshList])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            {
                listTodo[0] &&
                listTodo.map((task: Task, index: number) => (
                    <Card key={index}>
                        <p>{task.name}</p>
                        <p>{task.deadline} <br /> {leftTime(task.deadline)}</p>
                        <button onClick={() => removeTask(task)}>Done</button>
                    </Card>
                ))
            }
        </div>
    );
};

export default ListTodo;