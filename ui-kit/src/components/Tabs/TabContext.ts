import { createContext } from 'react';
import { Tab } from './types';

export interface TabContextProps {
  tabs: Tab[];
}

export default createContext<TabContextProps>({ tabs: [] });
