import { Styles } from "./styles";
import { Button } from "../button";
import { Item } from "../item";
import { useContextHook } from '../../context/hook';
import { GlobalContainer } from "../../styles/global";

export const ListItems = () => {

    const {users} = useContextHook()

    return (
        <Styles.Container>
            <GlobalContainer>
                <Button onClick={()=>{users.createNewItem()}}>Create new person</Button>
                <div className="usersList">{
                    users.items.length === 0 ?
                    (<label>there are no users</label>)
                    :
                    users.items.map((item, index) => (
                        <Item key={item.id} position={index} {...item} />
                    ))
                }</div>
            </GlobalContainer>
        </Styles.Container>
    )
}
