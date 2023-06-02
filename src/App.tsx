import { Provider } from 'react-redux';
import { setupStore } from './store';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import SWUIApp from 'modules/SWUIApp';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <SWUIApp />
      </Router>
    </Provider>
  );
}

export default App;
