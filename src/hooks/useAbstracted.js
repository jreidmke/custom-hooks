import {useState} from 'react';
import axios from 'axios';

const useAbstracted = (baseURL, initialState = []) => {
    const [cards, setCards] = useState(initialState);

    const addCard = async(params = "") => {
        const callURL = baseURL.includes('poke') ?
        `https://pokeapi.co/api/v2/pokemon/${params}/` :
        `https://deckofcardsapi.com/api/deck/new/draw/`;
        const resp = await axios.get(callURL);
        setCards(c => [...c, {...resp.data}]);
    };

    return [cards, addCard];
}

export default useAbstracted;