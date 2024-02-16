import React, {FC} from "react";
import {useAuthStore} from "@/store/auth.store";
import {Button} from "@chakra-ui/react";

export const Login: FC = () => {
    const login = useAuthStore((state) => state.login);

    const handleLogin = () => {
        // Perform login logic
        const user = { username: 'John', email: 'john@example.com' };
        login(user);
    };

    return (
        <Button onClick={handleLogin}
            variant="primary"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
            Login
        </Button>
    );
};
