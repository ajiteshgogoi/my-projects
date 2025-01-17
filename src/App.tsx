import React, { useState } from 'react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const apps = [
    {
      title: 'App One',
      description: 'A modern web application designed for seamless user experience.',
      imageUrl: 'https://placehold.co/600x400',
    },
    {
      title: 'App Two',
      description: 'Another powerful tool built with cutting-edge technology.',
      imageUrl: 'https://placehold.co/600x400',
    },
    {
      title: 'App Three',
      description: 'Innovative solution for your daily tasks.',
      imageUrl: 'https://placehold.co/600x400',
    },
  ];

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-500 min- flex flex-col`}>
      <header className="py-8 px-4 md:px-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold">My</h1>
        <button onClick={toggleDarkMode} className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition-colors duration-300">
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.005 9.005 0 003 12h18a9.005 9.005 0 00-4.646-8.646z" />
            </svg>
          )}
        </button>
      </header>
      <main className="flex-1 px-4 md:px-8 py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={app.imageUrl} alt={app.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{app.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{app.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer className="py-4 px-4 md:px-8 bg-gray-200 dark:bg-gray-700 text-center">
        <p className="text-gray-600 dark:text-gray-400">© 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;