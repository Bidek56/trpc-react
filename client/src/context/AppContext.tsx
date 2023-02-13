import { tutorialStatus, tutorialStatusEnum } from "../../../lib";
import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
  Dispatch,
} from "react";

export interface AppContextValue {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  selectedTab: tutorialStatus;
  setSelectedTab: Dispatch<SetStateAction<tutorialStatus>>;
  selectedTime: number;
  setSelectedTime: Dispatch<SetStateAction<number>>;
  selectedConv: number;
  setSelectedConv: Dispatch<SetStateAction<number>>;
  selectedProp: string;
  setSelectedProp: Dispatch<SetStateAction<string>>;
  selectedChannel: string;
  setSelectedChannel: Dispatch<SetStateAction<string>>;
}

const AppContext = createContext<AppContextValue>({} as AppContextValue);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTime, setSelectedTime] = useState<number>(7);
  const [selectedConv, setSelectedConv] = useState<number>(5);
  const [selectedProp, setSelectedProp] = useState<string>('');
  const [selectedChannel, setSelectedChannel] = useState<string>('');

  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<tutorialStatus>(
    tutorialStatusEnum[0]
  );
  return (
    <AppContext.Provider
      value={{ showModal, setShowModal, setSelectedTab, selectedTab, selectedTime, setSelectedTime,
              selectedConv, setSelectedConv, selectedProp, setSelectedProp,
              selectedChannel, setSelectedChannel
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  if (!useContext(AppContext)) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return useContext(AppContext);
}
