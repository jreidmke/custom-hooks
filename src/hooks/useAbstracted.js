import {useState} from 'react';
import axios from 'axios';

const useAbstracted = (baseURL, initialState = []) => {
    const [cards, setCards] = useState(initialState);

    const addCard = async(e = "", params = "") => {
        const resp = await axios.get(`${baseURL}${params}`);
        setCards(c => [...c, {...resp.data}]);
    };

    return [cards, addCard];
}

export default useAbstracted;