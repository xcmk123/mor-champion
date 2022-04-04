import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react';
const DatePicker = lazy(() => import('./components/index'))
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={'loading...'}>
          <DatePicker />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
