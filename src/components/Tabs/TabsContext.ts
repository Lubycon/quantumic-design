import { createContext } from 'react';

export interface TabsIndicatorPosition {
  width: number;
  left: number;
}

export interface TabsContextValue {
  onSelect: (value: string) => void;
  indicatorPosition: TabsIndicatorPosition | null;
  setIndicatorPosition: (indicator: TabsIndicatorPosition) => void;
  selectedValue: string;
}

const TabsContext = createContext<TabsContextValue>({
  selectedValue: '',
  onSelect: () => null,
  indicatorPosition: null,
  setIndicatorPosition: () => null,
});

export default TabsContext;
