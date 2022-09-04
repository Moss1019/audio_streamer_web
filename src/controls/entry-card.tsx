import { Box, Card, CardContent, CardMedia, Typography, styled } from "@mui/material";

const PaddedEntryBox = styled(Box)(() => ({
    padding: '0.6rem',
    cursor: 'pointer'
}));

const CardMediaStyle = {
    borderRadius: '100px',
    padding: '1rem'
};

export interface EntryCardProps {
    title: string,
    type: string,
    onClick: () => void
}

function EntryCard({
    title,
    type,
    onClick
}: EntryCardProps) {
    return (
        <PaddedEntryBox>
            <Card onClick={() => onClick()}>
                <CardMedia component="img" alt="image" src="favicon.ico" sx={CardMediaStyle} />
                <CardContent>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="h6">{type}</Typography>
                </CardContent>
            </Card>
        </PaddedEntryBox>
    );
}

export default EntryCard;
