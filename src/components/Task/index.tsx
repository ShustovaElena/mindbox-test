import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { ITask } from "../../types";
import { changeIsDone } from '../../slices/taskSlice';
import { useAppDispatch } from '../../store/hooks';

export const Task = ({ label, isDone }: ITask) => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        isDone = isDone ? false : true;
        dispatch(changeIsDone({label: label, isDone: isDone}));
    };

    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox icon={<CheckCircleOutlineIcon />} checkedIcon={<CheckCircleOutlineIcon />}/>} label={label} sx={isDone ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : undefined} onClick={onClick} />
        </FormGroup>
    );
};