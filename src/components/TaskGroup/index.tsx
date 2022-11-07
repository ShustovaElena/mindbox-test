import { Task } from "../Task";
import { useAppSelector } from '../../store/hooks';

export const TaskGroup = () => {
    const tasks = useAppSelector((state) => state.tasks.tasks);

    return (
        <>
        {tasks.map((item, index)=> {
            return <Task label={item.label} isDone={item.isDone} key={index} />
        })}
        </>
    );
};