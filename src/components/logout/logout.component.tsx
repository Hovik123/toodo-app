import React, {FC} from "react";
import {useAuthStore} from "@/store/auth.store";
import {Button} from "@chakra-ui/react";

export const Logout: FC = () => {
    const logout = useAuthStore((state) => state.logout);


    return (
        <Button onClick={logout}
            variant="primary"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
            logout
        </Button>
    );
};

