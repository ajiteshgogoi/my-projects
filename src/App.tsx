import React from 'react';

const App: React.FC = () => {
  const apps = [  
    {
      title: 'TouchBase',
      description: 'An intelligent relationship management tool to help you stay connected with the people who matter most.',
      imageUrl: 'https://touchbase.site/og.png',
      appUrl: 'https://touchbase.site/',
      category: 'Utility'
    },
    {
      title: 'BookSync',
      description: 'Sync your Kindle highlights to Notion. Maintain a personal library of your favourite book passages.',
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
    {
      title: 'JhurGreens',
      description: 'JhurGreens International is a premier sourcing agency and exporter.',
      imageUrl: 'https://static.wixstatic.com/media/e11c16_9584b5dabb964386b62e9f55b815c68d~mv2.png',
      appUrl: 'https://www.jhurgreens.com/',
      category: 'Website'
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
              <a key={index} href={app.appUrl} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <img src={app.imageUrl} alt={app.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{app.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{app.description}</p>
                  <div className="mt-auto pt-4">
                    <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{app.category}</span>
                  </div>
                </div>
              </a>
          ))}
        </section>
      </main>
      <footer className="py-6 px-4 md:px-8 bg-[#121212] border-t border-gray-800 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://t.me/ajiteshgogoi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.204 1.006.121.833.939z"/>
            </svg>
            <span>Telegram</span>
          </a>
          <a
            href="mailto:ajiteshgogoi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Email</span>
          </a>
        </div>
        <p className="text-gray-200">© {new Date().getFullYear()} <a href="https://ajiteshgogoi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">ajitesh gogoi</a></p>
      </footer>
    </div>
  );
};

export default App;
