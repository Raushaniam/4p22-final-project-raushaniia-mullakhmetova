import * as React from "react";
import "./Feedback.scss";
import {
    EMAIL,
    EMPTY_MESSAGE,
    ERROR_EMAIL,
    MESSAGE,
    NAME,
    SEND,
} from "../../common/constants/Dictionary";
import { Button, TextField, Box } from "@mui/material";

export const Feedback = ({
    email,
    onChangeEmail,
    name,
    onChangeName,
    text,
    onChangeText,
    isEmptyEmail,
    isEmptyText,
    isInCorrectEmail,
    isEmptyName,
    onSend,
}) => {
    return (
        <div className='Feedback'>
            <Box
                component='form'
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                autoComplete='off'
            >
                <TextField
                    id='outlined-basic'
                    label={EMAIL}
                    variant='outlined'
                    helperText={
                        isInCorrectEmail
                            ? ERROR_EMAIL
                            : isEmptyEmail
                            ? EMPTY_MESSAGE
                            : ""
                    }
                    error={isInCorrectEmail || isEmptyEmail}
                    onChange={onChangeEmail}
                    value={email}
                />
                <TextField
                    id='outlined-basic'
                    label={NAME}
                    variant='outlined'
                    error={isEmptyName}
                    helperText={isEmptyName ? EMPTY_MESSAGE : ""}
                    value={name}
                    onChange={onChangeName}
                />
                <TextField
                    id='outlined-multiline-static'
                    label={MESSAGE}
                    multiline
                    rows={4}
                    error={isEmptyText}
                    helperText={isEmptyText ? EMPTY_MESSAGE : ""}
                    value={text}
                    onChange={onChangeText}
                />
            </Box>
            <Button onClick={onSend}>{SEND}</Button>
        </div>
    );
};
