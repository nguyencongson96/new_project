import "@/styles/global.css";
import DefaultLayout from "@/layouts/default";
import store from "../../redux/store";
import { Provider } from "react-redux";
import LoadingLayout from "@/layouts/loading";

export default function App({ Component, pageProps }) {
  const LayoutComponent = Component.Layout || DefaultLayout;
  return (
    <Provider store={store}>
      <LayoutComponent>
        <Component {...pageProps} />
        <LoadingLayout />
      </LayoutComponent>
    </Provider>
  );
}
