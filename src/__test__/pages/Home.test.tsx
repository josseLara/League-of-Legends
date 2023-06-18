import Home from '../../pages/home/Home';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

test('renders champs filter and grid', () => {
  const { queryAllByText,queryAllByPlaceholderText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  // Verifica que el componente Home existe
  expect(queryAllByText('CAMPEÓN')).toHaveLength(1);
  // Verifica que el componente Home contiene los elementos que esperas que tenga
  expect(queryAllByPlaceholderText('Search champion')).toHaveLength(1);
  expect(queryAllByText('No results found')).toHaveLength(1);
});