import React from 'react';

const App: React.FC = () => {
  const apps = [
    {
      title: 'AI Addiction Network',
      description: 'A cyberpunk-themed trading game where players navigate the underground market of virtual AI drugs.',
      imageUrl: 'https://ai-addiction-network.vercel.app/og.png',
      appUrl: 'https://ai-addiction-network.vercel.app',
      category: 'Game'
    },
    {
      title: 'Cozy Connect',
      description: 'An AI-powered conversation prompt generator designed to foster natural, engaging conversations.',
      imageUrl: 'https://cozyconnect.vercel.app/og.png',
      appUrl: 'https://cozyconnect.vercel.app',
      category: 'Communication Aid'
    },
    {
      title: 'App Three',
      description: 'Innovative solution for your daily tasks.',
      imageUrl: 'https://placehold.co/600x400',
      appUrl: '#',
      category: 'Utility'
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col font-sans">
      <header className="py-12 px-4 md:px-8 text-center bg-gray-900 shadow-md">
        <h1 className="text-5xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">MY PROJECTS</h1>
      </header>
      <main className="flex-1 px-4 md:px-8 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {apps.map((app, index) => (
              <a key={index} href={app.appUrl} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img src={app.imageUrl} alt={app.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{app.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{app.description}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{app.category}</span>
                  </div>
                </div>
              </a>
          ))}
        </section>
      </main>
      <footer className="py-6 px-4 md:px-8 bg-gray-900 border-t border-gray-800 text-center">
        <p className="text-gray-200">© {new Date().getFullYear()} ajitesh gogoi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
