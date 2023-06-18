import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../redux/store"
import ChampDetails from "../../pages/details/ChampDetails";
import {  BrowserRouter, Route, Routes } from "react-router-dom";

test("ChampDetails Page", () => {
  const {container,queryAllByText} = render(
    <Provider store={store}>
     <BrowserRouter>
        <Routes>
          <Route index id="1" element={<ChampDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  expect(container.firstChild).toBeDefined();
  expect(queryAllByText('SPELLS')).toHaveLength(1);
  expect(queryAllByText('SKINS')).toHaveLength(1);
})