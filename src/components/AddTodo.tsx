import { ChangeEvent, useEffect, useState } from "react";
import { Task } from "../Interfaces";
import { Button, Container, Input, InputsBloc, TaskAdded } from "./AddTodo.style";

interface Props {
    refreshList: boolean;
    setRefreshList: (val: boolean) => void
}

const AddTodo = ({refreshList, setRefreshList}: Props) => {

    const [anim, setAnim] = useState(false)
    const [task, setTask] = useState<Task>({name: "", deadline: ""})
    const [taskAdded, setTaskAdded] = useState(false)

    const handleSaveList = (): void => {
        let listTasksJson= localStorage.getItem('task')
        setRefreshList(!refreshList)

        if(!listTasksJson) {
            const taskJson = JSON.stringify([task])
            localStorage.setItem('task', taskJson)
        } else {
            const listTasksTab = JSON.parse(listTasksJson)
            const tasksJson = JSON.stringify([...listTasksTab, task])
            localStorage.setItem('task', tasksJson)
        }
        setTask({name: "", deadline: ""})

        //Style
        setAnim(true)
        setTimeout(() => {
            setAnim(false)
        }, 300)

        setTaskAdded(true)
        setTimeout(() => {
            setTaskAdded(false)
        }, 1500)
    }

    useEffect(() => {
        let dateTs = Date.now()
        let date = new Date(dateTs).toLocaleTimeString()
        console.log(task)
        
    }, [task])

    return (
        <div>
            <Container>
                <h2>Add task to your list</h2>
                <InputsBloc>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Input 
                            placeholder='Name ' 
                            value={task.name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setTask({...task, name: e.target.value})}/
                        >
                        <Input 
                            value={task.deadline}
                            placeholder='Deadline (ex 12:15)'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setTask({...task, deadline: e.target.value})} 
                        />
                    </div>
                   <Button 
                        style={{
                            animation: anim ? "clic 0.2s" : ''
                        }}
                        onClick={handleSaveList}
                   > Add </Button>
                </InputsBloc>
                
                {
                    taskAdded && 
                    <TaskAdded>
                        Task Added !
                    </TaskAdded>
                }
            </Container>
        </div>
    );
};

export default AddTodo;
