
import React, { useState, useMemo, useEffect } from 'react';
import { Category, Project } from './types';
import { PROJECTS } from './constants';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import ChatWidget from './components/ChatWidget';
import Button from './components/Button';

// Doodle Components with flexible coloring
const StarDoodle = ({ className = "", color = "#f83e02" }) => (
  <svg viewBox="0 0 100 100" className={`w-12 h-12 ${className}`} style={{ fill: color }}>
    <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
  </svg>
);

const FlowerDoodle = ({ className = "", color = "#f83e02" }) => (
  <svg viewBox="0 0 100 100" className={`w-16 h-16 fill-none stroke-[4] ${className}`} style={{ stroke: color }}>
    <circle cx="50" cy="50" r="10" style={{ fill: color }} />
    <path d="M50 20 Q60 0 70 20 Q90 10 80 30 Q100 40 80 50 Q100 60 80 70 Q90 90 70 80 Q60 100 50 80 Q40 100 30 80 Q10 90 20 70 Q0 60 20 50 Q0 40 20 30 Q10 10 30 20 Q40 0 50 20" />
  </svg>
);

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const getProjectsByCategory = (cat: Category) => {
    return PROJECTS.filter(p => p.category === cat);
  };

  const highlightProjects = useMemo(() => {
    return PROJECTS.filter(p => ['1', '9', '14', '4', '17', '19', '20', '16'].includes(p.id));
  }, []);

  return (
    <div className="min-h-screen selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden">
      
      {/* Editorial Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-6 transition-all duration-500 flex justify-between items-center ${
        scrolled 
          ? 'py-4 bg-[#fde7cf]/80 backdrop-blur-xl border-b border-[#f83e02]/10 shadow-sm' 
          : 'py-6 bg-transparent'
      }`}>
        <h1 
          className="text-2xl font-serif-display text-[#f83e02] cursor-pointer hover:opacity-70 transition-opacity tracking-tight"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Guilherme Ike
        </h1>
        <div className="hidden md:flex gap-8">
          {[
            { label: 'Destaques', id: 'destaques' },
            { label: 'Cartazes', id: 'cartazes' },
            { label: 'WhatsApp', id: 'whatsapp' },
            { label: 'E-mail', id: 'email' },
            { label: 'TV Corporativa', id: 'tv' },
            { label: 'Textos', id: 'textos' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-800 hover:text-[#f83e02] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#f83e02] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://i.imgur.com/x6yisxM.jpg" 
               className="w-full h-full object-cover" 
               alt="Background Cover"
             />
             <div className="absolute inset-0 bg-[#fde7cf]/20 backdrop-blur-[0.5px]"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-[12vw] md:text-[8vw] font-serif-display text-[#f83e02] leading-[0.85] uppercase tracking-[-0.03em] drop-shadow-sm">
              Guilherme<br/>Ike
            </h2>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-60 cursor-pointer" onClick={() => scrollToSection('intro')}>
             <i className="fas fa-chevron-down text-[#f83e02] text-2xl"></i>
          </div>
        </section>

        {/* INTRO */}
        <section id="intro" className="py-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 reveal">
            <h3 className="text-7xl font-serif-display text-[#f83e02] mb-6 leading-none italic">Olá!</h3>
            <p className="text-[#f83e02] font-display text-4xl mb-12 tracking-wider">Tudo bem?</p>
            <p className="text-sm text-slate-700 leading-relaxed max-w-md text-justify">
              Meu nome é <span className="font-serif-display italic text-black text-xl">Guilherme Ike</span>. Trabalho com comunicação interna e conteúdo institucional. Gosto de organizar informações, traduzir mensagens importantes e criar materiais que façam sentido no dia a dia das pessoas. Crio conteúdo para diversas mídias. Vamos conversar!
            </p>
          </div>
          <div className="lg:w-1/2 relative reveal">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-3xl transform rotate-1">
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800" alt="Work space" />
            </div>
            <StarDoodle className="absolute -top-10 -right-10 w-24 h-24 rotate-12" />
          </div>
        </section>

        {/* SECTION: WHAT WOULD YOU LIKE TO SEE? - Cor #f83e02 */}
        <section className="py-24 px-6 bg-[#f83e02] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-serif-display mb-16 text-center reveal">O que gostaria de ver?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 reveal">
              {[
                { label: 'Cartazes', id: 'cartazes', icon: 'fa-layer-group', desc: 'Murais' },
                { label: 'WhatsApp', id: 'whatsapp', icon: 'fa-comment-dots', desc: 'Mobile' },
                { label: 'E-mail', id: 'email', icon: 'fa-envelope-open-text', desc: 'Newsletters' },
                { label: 'TV Corporativa', id: 'tv', icon: 'fa-tv', desc: 'Motion' },
                { label: 'Textos', id: 'textos', icon: 'fa-pen-nib', desc: 'Artigos' }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-500 hover:bg-white hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:bg-[#f83e02]/10 transition-colors">
                    <i className={`fas ${category.icon} text-xl group-hover:text-[#f83e02] transition-colors`}></i>
                  </div>
                  <h3 className="text-xl font-serif-display group-hover:text-[#f83e02] transition-colors mb-1 italic">
                    {category.label}
                  </h3>
                  <p className="text-[10px] opacity-60 group-hover:text-[#f83e02]/70 group-hover:opacity-100 transition-all uppercase tracking-widest font-bold">
                    {category.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: HIGHLIGHTS / DESTAQUES - Cor #fde7cf */}
        <section id="destaques" className="py-32 px-6 bg-[#fde7cf] border-y border-[#f83e02]/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="reveal">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#f83e02] mb-4 block">Portfólio</span>
                <h2 className="text-6xl md:text-8xl font-display text-slate-900 uppercase tracking-tighter leading-none">Destaques</h2>
              </div>
              <p className="text-slate-600 font-serif-display text-xl italic max-w-sm reveal text-right">Uma seleção curada de projetos em diversas mídias e formatos.</p>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 reveal">
              {highlightProjects.map((project) => (
                <div key={project.id} className="break-inside-avoid">
                   <ProjectCard 
                      project={project} 
                      onClick={setSelectedProject} 
                   />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: CARTAZES - Cor #feb431 */}
        <section id="cartazes" className="py-32 px-6 bg-[#feb431]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
              <h2 className="text-6xl md:text-8xl font-display text-[#f83e02] uppercase tracking-tighter reveal">Cartazes</h2>
              <p className="text-slate-700 font-serif-display text-xl italic reveal">Sinalização e murais físicos</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {getProjectsByCategory(Category.POSTERS).map(project => (
                <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: WHATSAPP - Cor #f83e02 */}
        <section id="whatsapp" className="bg-[#f83e02] py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
              <h2 className="text-6xl md:text-8xl font-display text-white uppercase tracking-tighter reveal">WhatsApp</h2>
              <p className="text-orange-100 font-serif-display text-xl italic reveal">Comunicação ágil e mobile-first</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {getProjectsByCategory(Category.WHATSAPP).map(project => (
                <div key={project.id} onClick={() => setSelectedProject(project)} className="cursor-pointer group">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-all h-full">
                    <img src={project.imageUrl} className="w-full h-80 object-cover rounded-2xl mb-6 shadow-xl" />
                    <h3 className="text-2xl font-serif-display text-white mb-2 italic">{project.title}</h3>
                    <p className="text-orange-100/80 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: E-MAIL - Cor #fde7cf */}
        <section id="email" className="py-32 px-6 bg-[#fde7cf]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
              <h2 className="text-6xl md:text-8xl font-display text-[#f83e02] uppercase tracking-tighter reveal">Mailing</h2>
              <p className="text-slate-600 font-serif-display text-xl italic reveal">E-mails institucionais e newsletters</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {getProjectsByCategory(Category.MAILING).map(project => (
                <div key={project.id} onClick={() => setSelectedProject(project)} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[16/10] bg-white/50 border border-[#f83e02]/10 shadow-sm">
                    <img src={project.imageUrl} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-[#f83e02]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h4 className="text-3xl font-serif-display text-[#f83e02] italic mb-4">{project.title}</h4>
                  <p className="text-slate-600 max-w-xl">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: TV CORPORATIVA - Cor #feb431 */}
        <section id="tv" className="py-32 bg-[#feb431] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
              <h2 className="text-6xl md:text-8xl font-display text-[#f83e02] uppercase tracking-tighter reveal">TV Corporativa</h2>
              <p className="text-slate-700 font-serif-display text-xl italic reveal">Motion graphics e sinalização digital</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {getProjectsByCategory(Category.CORPORATE_TV).map(project => (
                <div key={project.id} onClick={() => setSelectedProject(project)} className="relative group cursor-pointer">
                  <div className="aspect-video overflow-hidden rounded-3xl border border-[#f83e02]/10 bg-white/30 backdrop-blur-sm">
                    <img src={project.imageUrl} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <i className="fas fa-play-circle text-6xl text-[#f83e02] group-hover:scale-110 transition-transform"></i>
                    </div>
                  </div>
                  <h4 className="text-3xl font-display mt-8 tracking-widest uppercase text-slate-900">{project.title}</h4>
                  <p className="text-slate-700 mt-4">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: TEXTOS - Cor #fde7cf */}
        <section id="textos" className="py-32 bg-[#fde7cf] border-y border-[#f83e02]/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
              <h2 className="text-6xl md:text-8xl font-display text-[#f83e02] uppercase tracking-tighter reveal">Textos</h2>
              <p className="text-slate-600 font-serif-display text-xl italic reveal">Artigos e redação institucional</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {getProjectsByCategory(Category.ARTICLES).map(project => (
                <article 
                  key={project.id} 
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-[#f83e02]/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-2xl">
                    <img src={project.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={project.title} />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-3xl font-serif-display leading-tight italic group-hover:text-[#f83e02] transition-colors text-slate-900">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-[#f83e02]/60 bg-[#f83e02]/5 px-3 py-1 rounded-full">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT - Cor #193764 */}
        <section className="py-40 bg-[#193764] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-[10vw] font-display text-white leading-none uppercase mb-20 tracking-tighter reveal">
              VAMOS <br/> CONVERSAR?
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 reveal">
              <Button 
                className="bg-[#f83e02] text-white text-xl md:text-2xl font-display py-4 md:py-6 px-10 md:px-16 hover:scale-105 tracking-widest flex items-center gap-4 border-none"
                onClick={() => window.open('https://www.linkedin.com/in/guilherme-ike-051835261/', '_blank')}
              >
                <i className="fab fa-linkedin text-2xl"></i> LINKEDIN
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white text-xl md:text-2xl font-display py-4 md:py-6 px-10 md:px-16 hover:scale-105 tracking-widest flex items-center gap-4 bg-transparent"
                onClick={() => window.location.href = 'mailto:guilhermeike@usp.br'}
              >
                <i className="fas fa-envelope text-2xl"></i> E-MAIL
              </Button>
            </div>
          </div>
          <StarDoodle className="absolute top-20 left-20 w-32 h-32 opacity-10 rotate-45" color="white" />
          <FlowerDoodle className="absolute bottom-20 right-20 w-48 h-48 opacity-10" color="white" />
        </section>
      </main>

      {/* Footer - Cor #f83e02 */}
      <footer className="bg-[#f83e02] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white text-center md:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4 opacity-70">Redes</p>
            <div className="flex gap-8">
               <a href="https://www.linkedin.com/in/guilherme-ike-051835261/" target="_blank" rel="noopener noreferrer" className="font-serif-display text-xl hover:opacity-50 transition-opacity tracking-tight">LinkedIn</a>
            </div>
          </div>
          <h2 className="font-serif-display text-2xl text-white tracking-tighter">Guilherme Ike</h2>
          <div className="text-white text-center md:text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4 opacity-70">Contato</p>
            <a href="mailto:guilhermeike@usp.br" className="font-serif-display text-xl hover:opacity-50 transition-opacity tracking-tight">guilhermeike@usp.br</a>
          </div>
        </div>
      </footer>

      {/* Components */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      <ChatWidget />
    </div>
  );
};

export default App;
