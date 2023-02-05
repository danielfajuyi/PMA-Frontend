import GlobalContextProvider, { GlobalContext } from "./contexts/GlobalContext";
import { BaseRoutes } from "./Routes/BaseRoutes";

function App() {
  return (
    <GlobalContextProvider>
      <BaseRoutes />
    </GlobalContextProvider>
  );
}

export default App;
