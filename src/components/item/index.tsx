import { Styles } from "./styles";
import { Button } from "../button";

import { PencilIcon } from "../icons/pencil";
import { TrashIcon } from "../icons/trash";
import { ItemForm } from "./form";
import { useContextHook } from '../../context/hook';
import { IItem } from "../../interfaces/IItem";

interface IProps extends IItem {
    position: number;
}

export const Item = ({ position, nickname, age, id, isEditing = false }: IProps) => {

    const { users } = useContextHook();

    return (
        <Styles.Container>
            <strong>{position}</strong>
            {
                isEditing
                    ? (
                        <ItemForm
                            {...{
                                nickname,
                                age,
                                id,
                                isEditing,
                            }}
                        />
                    )
                    : (
                        <>
                            <p>{nickname ?? <i>Insert name</i>}</p>
                            <p>{age ?? <i>Insert age</i>}</p>

                            <Styles.GroupButtons>
                                <Button onClick={() => users.toggleIsEditing(id)}>
                                    <PencilIcon />
                                </Button>
                                <Button onClick={() => users.deleteItem(id)}>
                                    <TrashIcon />
                                </Button>
                            </Styles.GroupButtons>
                        </>
                    )
            }
        </Styles.Container>
    )
}
