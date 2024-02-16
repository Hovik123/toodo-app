'use client';

import {Box, Card, CardBody, FormHelperText} from "@chakra-ui/react";
import {PrivateRoute} from "@/components/private-route/private-route.component";
import {useAuthStore} from "@/store/auth.store";
import {useTodoStore} from "@/store/todo.store";

export default function Home() {
    const todos = useTodoStore((state) => state.todos);
    return (
        <PrivateRoute>
            <Box m={10}>
                {todos && todos.map((todo) => (
                    <Card key={todo.id}>
                        <CardBody>{todo.text}</CardBody>
                    </Card>
                ))}
                {todos.length === 0 && (<span>There is no todos yet. Add more cards</span>)}
            </Box>
        </PrivateRoute>

    );
}
