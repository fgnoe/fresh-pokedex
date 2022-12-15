import React from 'react';
import {Card, Col, Text} from "@nextui-org/react";

const PokemonCard = () => {
    return (
        <Card css={{ w: "130px", h: "190px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 12, }}>
                <Col>
                    <Text h4 color="white">
                        Squirtle
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                width="100%"
                css={{marginTop: 14}}
                height={150}
                objectFit="contain"
            />
        </Card>
    );
}

export default PokemonCard;