'use client';

import {PrivateRoute} from "@/components/private-route/private-route.component";
import {AddContent} from "@/components/add-content/add-content.component";

export default function AddItem() {
  return (
      <PrivateRoute>
          <AddContent/>
      </PrivateRoute>
  );
}
