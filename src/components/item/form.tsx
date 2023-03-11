import { useState } from 'react';
import { Styles } from "./styles";
import { IItem } from "../../interfaces/IItem";

import { Button } from "../button";
import { Input } from "../input";

import { SaveIcon } from "../icons/save";
import { CloseIcon } from "../icons/close";

import { useContextHook } from '../../context/hook';

export const ItemForm = ({ ...item }: IItem) => {

    const { users } = useContextHook();

    const [formState, setFormState] = useState(item);

    const { nickname = '', age = '', id } = formState || {};

    return (
        <>
            <Input
                name="nickname"
                placeholder="Nickname"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, nickname: v }))}
                value={nickname}
                autoFocus
            />
            <Input
                name="age"
                placeholder="Age"
                type="number"
                onChangeText={(v) =>
                    setFormState((old) => ({ ...old, age: ~~v }))}
                value={age}
            />

            <Styles.GroupButtons>
                <Button onClick={() => users.editItem(formState)}>
                    <SaveIcon />
                </Button>
                <Button onClick={() => users.toggleIsEditing(id)}>
                    <CloseIcon />
                </Button>
            </Styles.GroupButtons>
        </>
    )
}
