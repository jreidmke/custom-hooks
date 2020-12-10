import {useState} from 'react';
import axios from 'axios';

const useAxios = (initialState = []) => {
    const [cards, setCards] = useState(initialState);

    const addCard = async() => {
        const resp = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/`);
        setCards(c => [...c, {...resp.data}]);
        console.log(resp.data);
    };

    return [cards, addCard];
}

export default useAxios;