import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTrasactionModal";

import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal(){
    setIsNewTrasactionModalOpen(true);
  };

  function handleCloseNewTransactionModal(){
    setIsNewTrasactionModalOpen(false);
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal 
      isOpen={isNewTrasactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle />
    </TransactionsProvider>
  );
}