import { useContextHook } from '../../context/hook';
import { MoonIcon } from "../icons/moon";
import { SunIcon } from "../icons/sun";
import { Styles, Container } from "./styles";

export const ToggleTheme = () => {

    const { theme } = useContextHook()

    return (
        <Container onClick={theme.toggleTheme}>
            <Styles.Bull>
                <Styles.Icon>
                    {theme.themeName === 'light' ? <SunIcon /> : <MoonIcon />}
                </Styles.Icon>
            </Styles.Bull>
        </Container>
    )
}
