import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from "react";
import { ITask } from "../../types";

export const Task = ({ label }: ITask) => {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox icon={<CheckCircleOutlineIcon />} checkedIcon={<CheckCircleOutlineIcon />}/>} label={label} />
        </FormGroup>
    );
};