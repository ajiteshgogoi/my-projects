import React from 'react';

const App: React.FC = () => {
  const apps = [  
    {
      title: 'BookSync',
      description: 'Easily sync your Kindle highlights to Notion. Organise your reading insights in a searchable database.',
      imageUrl: 'https://booksync.vercel.app/og.png',
      appUrl: 'https://booksync.vercel.app/',
      category: 'Utility'
    },
    {
      title: 'Cozy Connect',
      description: 'An AI-powered conversation prompt generator designed to foster deep, engaging interactions.',
      imageUrl: 'https://cozyconnect.vercel.app/og.png',
      appUrl: 'https://cozyconnect.vercel.app',
      category: 'Communication'
    },
    {
      title: 'AI Addiction Network',
      description: 'A cyberpunk-themed trading game where players navigate the underground market of virtual AI simulation drugs.',
      imageUrl: 'https://ai-addiction-network.vercel.app/og.png',
      appUrl: 'https://ai-addiction-network.vercel.app',
      category: 'Game'
    },
    {
      title: 'Perfect Egg Timer',
      description: 'Get perfectly boiled eggs every time with this precise egg timer.',
      imageUrl: 'https://perfect-egg-timer.vercel.app/og.png',
      appUrl: 'https://perfect-egg-timer.vercel.app/',
      category: 'Utility'
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col font-sans">
      <header className="py-12 px-4 md:px-8 bg-[#121212] shadow-md">
        <div className="flex items-center justify-center gap-4">
          <img src="/logo.svg" alt="Logo" className="w-12 h-12" />
          <h1 className="text-4xl font-bold uppercase tracking-wider text-white [text-shadow:_0_0_4px_#ffffff70]">PROJECTS</h1>
        </div>
      </header>
      <main className="flex-1 px-4 md:px-8 py-12">
        <section className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-w-7xl mx-auto place-content-center min-h-[calc(100vh-20rem)] py-8">
          {apps.map((app, index) => (
              <a key={index} href={app.appUrl} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img src={app.imageUrl} alt={app.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{app.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{app.description}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{app.category}</span>
                  </div>
                </div>
              </a>
          ))}
        </section>
      </main>
      <footer className="py-6 px-4 md:px-8 bg-[#121212] border-t border-gray-800 text-center">
        <p className="text-gray-200">© {new Date().getFullYear()} <a href="https://ajiteshgogoi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">ajitesh gogoi</a></p>
      </footer>
    </div>
  );
};

export default App;
