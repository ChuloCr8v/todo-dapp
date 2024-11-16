import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import AppRoutes from "./routes/AppRoutes";
import { Loading } from "./components/Loading";
import PageError from "./components/PageError";
import { persistor, store } from "./redux/store";
import { ErrorBoundary } from "react-error-boundary";

declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={PageError}>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#0A96CC",
                },
                components: {
                  Form: {
                    itemMarginBottom: 16,
                  },
                  Input: {
                    activeBg: "inherit",
                  },
                },
              }}
            >
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </ConfigProvider>
          </PersistGate>
        </Provider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
