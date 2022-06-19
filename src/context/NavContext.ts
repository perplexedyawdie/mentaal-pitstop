import { createContext } from 'react';
import { PitstopNav } from '../models/nav.model';


export const NavContext = createContext<PitstopNav | null>(null)