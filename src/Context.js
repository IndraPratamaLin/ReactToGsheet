import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // Show Block Component
  const [ShowBlockOne, setShowBlockOne] = React.useState(true);
  const [ShowBlockTwo, setShowBlockTwo] = React.useState(true);
  const [ShowBlockThree, setShowBlockThree] = React.useState(true);
  // Modal
  const [ModalOpen, setModalOpen] = React.useState(false);
  // Snack
  const [SnackForBlockOne, setSnackForBlockOne] = React.useState(false);
  const [SnackForBlockTwo, setSnackForBlockTwo] = React.useState(false);
  const [SnackForBlockThree, setSnackForBlockThree] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        ShowBlockOne,
        setShowBlockOne,
        ShowBlockTwo,
        setShowBlockTwo,
        ShowBlockThree,
        setShowBlockThree,
        // modal
        ModalOpen,
        setModalOpen,
        // snack
        SnackForBlockOne,
        setSnackForBlockOne,
        SnackForBlockTwo,
        setSnackForBlockTwo,
        SnackForBlockThree,
        setSnackForBlockThree,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
