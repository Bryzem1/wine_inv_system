import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWineList } from '../api';
import Table from './Table';
import { Wine } from '../utils/types';

function WineListPage() {
    const { id } = useParams<{ id: string }>();
    const [wine, setWine] = useState<Wine[] | null>(null);

    useEffect(() => {
        if (id) {
            fetchWineList(id).then(data => {
                const wineData = [data];
                setWine(wineData);
            });
        }
    }, [id]);

    if (!wine) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{wine[0].name}</h1>
            <Table data={wine} />
        </div>
    );
}

export default WineListPage;
