import { Button, Container, Input, InputsBloc } from "./AddTodo.style";

const AddTodo = () => {
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
                   <Button> Add </Button>
                </InputsBloc>
            </Container>
        </div>
    );
};

export default AddTodo;
