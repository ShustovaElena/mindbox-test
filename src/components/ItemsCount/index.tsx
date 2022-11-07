import { Typography } from "@mui/material";
import React from "react";
import { IItemsCount } from "../../types";

export const ItemsCount = ({ countItems }: IItemsCount) => {
    return (
        <Typography variant="body1" component="p" color="primary" sx={{ display: 'inline', marginTop: '5px'}}>
            {countItems} items left
        </Typography>
    );
};