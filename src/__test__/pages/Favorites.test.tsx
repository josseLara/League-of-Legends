import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../redux/store"
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "../../pages/favorites/Favorites";

test("ChampDetails Page", () => {
  const {container,queryAllByText} = render(
    <Provider store={store}>
     <BrowserRouter>
        <Routes>
          <Route index element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  expect(container.firstChild).toBeDefined();
  expect(queryAllByText('Favorites')).toHaveLength(1);
})