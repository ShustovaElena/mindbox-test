import { Typography } from "@mui/material";
import { useAppSelector } from '../../store/hooks';

export const ItemsCount = () => {
    const tasks = useAppSelector((state) => state.tasks.tasks);

    return (
        <Typography variant="body1" component="p" color="primary" sx={{ display: 'inline', marginTop: '5px'}}>
            {tasks.filter(item => item.isDone === false).length} items left
        </Typography>
    );
};