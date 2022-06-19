export interface PitstopNav {
    currLoc: number;
    setCurrLoc: React.Dispatch<React.SetStateAction<number>>;
}

export enum NavCount {
    'MAIN' = 0,
    'COOLDOWN' = 1,
    'GET_STARTED' = 2,
    'MINDFULLNESS_CARDS' = 3,
    'BIRDS_EYE_VIEW' = 4
}