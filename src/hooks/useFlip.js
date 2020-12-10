import {useState} from 'react';

const useFlip = (initialState = true) => {
    const [showing, setShowing] = useState(initialState);

    const flipCard = () => {
        setShowing(!showing);
    }

    return [showing, flipCard];
}

export default useFlip;
