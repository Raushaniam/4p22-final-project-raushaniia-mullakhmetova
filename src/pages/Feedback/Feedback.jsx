import * as React from "react";
import "./Feedback.scss";
import {
    AGREEMENT,
    EMAIL,
    EMPTY_MESSAGE,
    ERROR_EMAIL,
    MAN,
    MESSAGE,
    NAME,
    SEND,
    TERM_NOT_AGREED,
    UPLOAD,
    WOMAN,
} from "../../common/constants/Dictionary";
import {
    Button,
    TextField,
    Box,
    Checkbox,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    FormControl,
    Radio,
    FormHelperText,
} from "@mui/material";
import { Man } from "@mui/icons-material";

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
    onChangeCheckbox,
    uploadedFile,
    isEmptyCheckbox,
    gender,
    onChangeGender,
    onUploadFile,
    isAgreedTerm,
}) => {
    return (
        <div className='Feedback'>
            <div className='FeedbackContent'>
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
                    <FormControl>
                        <FormLabel id='demo-radio-buttons-group-label'>
                            Пол
                        </FormLabel>
                        <RadioGroup
                            value={gender}
                            defaultValue={"man"}
                            onChange={onChangeGender}
                        >
                            <FormControlLabel
                                value={"woman"}
                                control={<Radio />}
                                label={WOMAN}
                            />
                            <FormControlLabel
                                value={"man"}
                                control={<Radio />}
                                label={MAN}
                            />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        id='outlined-multiline-static'
                        label={MESSAGE}
                        multiline
                        rows={6}
                        error={isEmptyText}
                        helperText={isEmptyText ? EMPTY_MESSAGE : ""}
                        value={text}
                        onChange={onChangeText}
                    />
                    <label
                        htmlFor='contained-button-file'
                        className='buttonFile'
                    >
                        <Button variant='contained' component='label'>
                            {UPLOAD}
                            <input
                                hidden
                                multiple
                                type='file'
                                onChange={onUploadFile}
                            />
                        </Button>
                        {uploadedFile}
                    </label>
                    <FormControl required error={isEmptyCheckbox}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isAgreedTerm}
                                    onChange={onChangeCheckbox}
                                />
                            }
                            label={AGREEMENT}
                        />
                        <FormHelperText>
                            {isEmptyCheckbox ? TERM_NOT_AGREED : ""}
                        </FormHelperText>
                    </FormControl>
                </Box>
                <Button onClick={onSend}>{SEND}</Button>
            </div>
        </div>
    );
};
