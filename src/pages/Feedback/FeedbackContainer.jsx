import * as React from "react";
import { Feedback } from "./Feedback";
import { useState } from "react";

const resultObject = {
    email: "",
    name: "",
    message_text: "",
};

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

export const FeedbackContainer = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [warningState, setWarningState] = useState({
        isInCorrectEmail: false,
        isEmptyEmail: false,
        isEmptyName: false,
        isEmptyText: false,
    });

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
        const validateStatus = validateEmail(event.target.value);
        if (!validateStatus) {
            setWarningState((prevState) => {
                return {
                    ...prevState,
                    isInCorrectEmail: true,
                };
            });
        } else {
            setWarningState((prevState) => {
                return {
                    ...prevState,
                    isInCorrectEmail: false,
                };
            });
        }
        if (event.target.value.length > 0) {
            setWarningState((prevState) => {
                return {
                    ...prevState,
                    isEmptyEmail: false,
                };
            });
        }
    };
    const onChangeName = (event) => {
        setName(event.target.value);
        if (event.target.value.length > 0) {
            setWarningState((prevState) => {
                return {
                    ...prevState,
                    isEmptyName: false,
                };
            });
        }
    };
    const onChangeText = (event) => {
        setText(event.target.value);
        if (event.target.value.length > 0) {
            setWarningState((prevState) => {
                return {
                    ...prevState,
                    isEmptyText: false,
                };
            });
        }
    };

    const onSend = () => {
        if (email.length === 0) {
            setWarningState((prevState) => {
                return {
                    ...prevState,
                    isEmptyEmail: true,
                };
            });
        } else if (email.length > 0) {
            setWarningState((prevState) => {
                return {
                    ...prevState,
                    isEmptyEmail: false,
                };
            });
        }

        if (name.length === 0) {
            setWarningState((prevState) => {
                return {
                    ...prevState,
                    isEmptyName: true,
                };
            });
        } else {
            setWarningState((prevState) => {
                return {
                    ...prevState,
                    isEmptyName: false,
                };
            });
        }

        if (text.length === 0) {
            setWarningState((prevState) => {
                return {
                    ...prevState,
                    isEmptyText: true,
                };
            });
        } else {
            setWarningState((prevState) => {
                return {
                    ...prevState,
                    isEmptyText: false,
                };
            });
        }

        setWarningState((prevState) => {
            if (
                !prevState.isEmptyEmail &&
                !prevState.isInCorrectEmail &&
                !prevState.isEmptyName &&
                !prevState.isEmptyText
            ) {
                console.log({
                    email,
                    name,
                    text,
                });
            }
            return prevState;
        });
    };

    return (
        <Feedback
            email={email}
            onChangeEmail={onChangeEmail}
            name={name}
            onChangeName={onChangeName}
            text={text}
            onChangeText={onChangeText}
            isInCorrectEmail={warningState.isInCorrectEmail}
            isEmptyEmail={warningState.isEmptyEmail}
            isEmptyName={warningState.isEmptyName}
            isEmptyText={warningState.isEmptyText}
            onSend={onSend}
        />
    );
};
