import './App.less'
import Layout from "./layouts"
import store from './store'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="*" element={<Layout />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
