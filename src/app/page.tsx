'use client';

import {Box, Card, CardBody} from "@chakra-ui/react";
import {PrivateRoute} from "@/components/private-route/private-route.component";

export default function Home() {
  return (
      <PrivateRoute>
         <Box m={10}>
             <Card>
                 <CardBody>
                     Text
                 </CardBody>
             </Card>
         </Box>

      </PrivateRoute>

  );
}
