import { Button, Icon, styled } from "@mui/material";

const MenuButton = styled(Button)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
}));

export interface MenuEntryProps {
    text: string,
    icon: any,
    onClick: () => void
}

function MenuEntry({
    text,
    icon,
    onClick
}: MenuEntryProps) {
    return (
        <MenuButton onClick={() => onClick()}>
            <Icon component={icon} /> {text}
        </MenuButton>
    );
}

export default MenuEntry;
