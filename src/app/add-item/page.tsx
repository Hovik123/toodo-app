'use client';

import {Button, FormControl, FormHelperText, FormLabel, Input, ListItem, UnorderedList} from "@chakra-ui/react";
import {PrivateRoute} from "@/components/private-route/private-route.component";

export default function AddItem() {
  return (
      <PrivateRoute>
          <FormControl>
              <FormLabel>Content</FormLabel>
              <Input type='text' />
              <Button>Add new content</Button>
          </FormControl>
      </PrivateRoute>
  );
}
