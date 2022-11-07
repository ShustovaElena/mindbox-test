import React from "react";
import { ButtonType } from "../Button";
import { ClearButton } from "../ClearButton";
import { ItemsCount } from "../ItemsCount";
import './index.css';

export const ButtonGroup = () => {
    return (
        <div className="button-group">
            <ItemsCount countItems={2}/>
            <div>
                <ButtonType text="All" />
                <ButtonType text="Active" />
                <ButtonType text="Complited" />
            </div>
            <ClearButton />
        </div>
    );
};