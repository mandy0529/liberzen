import React, {useContext, useState} from 'react';

const AppContext = React.createContext();

const AppContextProvider = ({children}) => {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          sidebar,
          openSidebar,
          closeSidebar,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
