import { useState } from "react";
import { Button, Container, Input, InputsBloc } from "./AddTodo.style";

const AddTodo = () => {

    const [anim, setAnim] = useState(false)

    return (
        <div>
            <Container>
                <h2>Add task to your list</h2>
                <InputsBloc>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Input placeholder='Name ' />
                        <Input placeholder='Deadline (ex 12:15)' />
                    </div>
                   <Button 
                        style={{
                            animation: anim ? "clic 0.2s" : ''
                        }}
                        onClick={() => {
                            setAnim(true)
                            setTimeout(() => {
                                setAnim(false)
                            }, 300)
                        }}
                   > Add </Button>
                </InputsBloc>
            </Container>
        </div>
    );
};

export default AddTodo;
