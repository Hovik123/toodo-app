'use client';

import React, {FC} from "react";
import {
    Box,
    Heading,
    Flex, Stack,
    Text
} from "@chakra-ui/react";
import {Login, Logout} from "@/components";
import {useAuthStore} from "@/store/auth.store";
import Link from "next/link";

export const Header: FC = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return (
        <Flex
            mb={10}
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
            <Stack
                direction={{base: "column", md: "row"}}
                width={{base: "full", md: "auto"}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, md: 0}}
            >
                {isAuthenticated && (
                    <>
                        <Link href="/"><Text>List</Text></Link>
                        <Link href="/add-item"><Text>Add Card</Text></Link>
                    </>
                )}
            </Stack>

            <Box
                display={{base: 'block', md: "block"}}
                mt={{base: 4, md: 0}}
            >
                {isAuthenticated ? <Logout/> : <Login/>}

            </Box>
        </Flex>
    );
};

