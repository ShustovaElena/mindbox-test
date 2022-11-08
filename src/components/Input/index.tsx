import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { addTask } from '../../slices/taskSlice';
import { useAppDispatch } from '../../store/hooks';

export const InputField = () => {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        dispatch(addTask({label: text, isDone: false}));
        event.preventDefault();
        setText('');
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField id="input" value={text} label="What needs to be done?" variant="outlined" fullWidth onChange={handleChange}/>
        </form>
    );
};