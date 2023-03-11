import { GlobalContainer } from "../../styles/global"
import { ToggleTheme } from "../toggleTheme"
import { Styles } from "./styles"

export const Header = () => {
    return (
        <Styles.Container>
            <GlobalContainer>
                <h1>UsersList</h1>
                <ToggleTheme />
            </GlobalContainer>
        </Styles.Container>
    )
}
