import React from 'react';
import Globalstyles from './styles/Globalstyles';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Layout>
      <Navbar />

    </Layout>
    <Globalstyles />
    </>
  );
}

export default App;
