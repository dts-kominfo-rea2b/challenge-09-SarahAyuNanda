import { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  const [listContact, setListContact] = useState([])

  useEffect(() => {
    setListContact(contacts)
  }, [])

  return (
    <div className="App">
      <Header />
      <Contact data={listContact} />
    </div>
  );
}

export default App;
