import { createContext, useState, useRef, useEffect } from "react";

import {io} from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setnewMessageFlag] = useState(false);


  const socket = useRef();

  useEffect(()=>{
    socket.current = io('ws://localhost:9000');
  }, [])

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setnewMessageFlag
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
