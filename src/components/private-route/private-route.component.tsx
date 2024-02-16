import {FC, PropsWithChildren} from 'react';
import {useAuthStore} from "@/store/auth.store";
import {Text} from '@chakra-ui/react';
import {Login} from "@/components";


export const PrivateRoute: FC<PropsWithChildren> = ({children}) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return (
        isAuthenticated ? <>{children}</> : (<>
            <Text>You need to be authenticated please <Login/></Text>

        </>)


    );
};
