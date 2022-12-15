import React from 'react';
import {Box, Card, CardContent, CardMedia, Paper, Typography} from "@mui/material";

const PokemonCard = () => {
    return (
        <Paper elevation={24}>
            <Card sx={{ maxWidth: 345 }}>
                <Box mb={-5} mt={-1}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                    />
                    </Box>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Squirtle
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
    );
}

export default PokemonCard;