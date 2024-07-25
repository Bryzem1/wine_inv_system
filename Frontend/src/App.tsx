import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WineListListPage from './components/WineListListPage';
import WineListPage from './components/WineListPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/wine-list/:id" element={<WineListPage />} />
                <Route path="/" element={<WineListListPage />} />
            </Routes>
        </Router>
    );
}

export default App;
