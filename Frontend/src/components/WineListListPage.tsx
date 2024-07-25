import { useEffect, useState } from 'react';
import { fetchWineLists } from '../api';
import WineLLTable from './WineLLTable';
import { WineList } from '../utils/types';

function WineListListPage() {
    const [wineLists, setWineLists] = useState<WineList[]>([]);

    useEffect(() => {
        fetchWineLists().then(data => (data));
    }, []);

    return (
        <div>
            <h1>Wine Lists</h1>
            <WineLLTable wineLists={wineLists} />
        </div>
    );
}

export default WineListListPage;