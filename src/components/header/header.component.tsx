'use client';

import React, {FC} from "react";
import {
    Box,
    Heading,
    Flex,
} from "@chakra-ui/react";
import {Login, Logout} from "@/components";
import {useAuthStore} from "@/store/auth.store";

export const Header: FC = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="teal.500"
            color="white"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    Todo App
                </Heading>
            </Flex>

            <Box
                display={{base: 'block', md: "block"}}
                mt={{base: 4, md: 0}}
            >
                {isAuthenticated ? <Logout/> : <Login/>}

            </Box>
        </Flex>
    );
};

