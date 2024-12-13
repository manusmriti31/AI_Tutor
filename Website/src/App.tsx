import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NotebookList from './components/notebooks/NotebookList';
import RecommendedNotebooks from './components/recommendations/RecommendedNotebooks';
import Footer from './components/Footer';
import { useNotebooks } from './hooks/useNotebooks';

function App() {
  const { notebooks: recommendations, loading, error } = useNotebooks();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <NotebookList />
        <RecommendedNotebooks
          recommendations={recommendations}
          loading={loading}
          error={error}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;