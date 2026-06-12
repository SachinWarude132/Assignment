import React from 'react'
import { RouterProvider } from 'react-router'
import router from './routes'
import { ContextProvider } from './features/Auth/auth.context'
import { TasksProvider } from './features/Tasks/tasks.context'
 
const App = () => {
  return (
    <ContextProvider>
      <TasksProvider>
        <RouterProvider router={router} />
      </TasksProvider>
    </ContextProvider>
  );
};

export default App;

 