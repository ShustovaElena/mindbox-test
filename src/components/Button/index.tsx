import { Button } from "@mui/material";
import React from "react";
import { IButtonType } from "../../types";

export const ButtonType = ({ text }: IButtonType) => {
    return (
        <Button variant="text">{text}</Button>
    );
};