
import React, { useState } from 'react';
import { Project, Category } from '../types';
import Button from './Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isMediaFullScreen, setIsMediaFullScreen] = useState(false);

  if (!project) return null;

  const isMailing = project.category === Category.MAILING;
  const isWhatsApp = project.category === Category.WHATSAPP;
  const isPressScience = project.category === Category.PRESS_SCIENCE;
  const isArticle = project.category === Category.ARTICLES;

  const toggleFullScreen = () => setIsMediaFullScreen(!isMediaFullScreen);

  // Mailing Simulation Component
  const MailingSimulation = () => {
    // Labels updated per project ID
    const fromLabel = (project.id === '1' || project.id === '19') ? 'Time de Comunicação' : 'Guilherme Ike | Comunicação';
    const subjectLabel = project.id === '1' ? 'Olá, pessoal! 👋 Funcionamento na Semana Santa' : (project.id === '19' ? 'Nossos emails estão de cara nova!' : project.title);

    return (
      <div className="flex flex-col h-full bg-[#fde7cf]/50 p-4 md:p-6 overflow-hidden">
        <div className="max-w-2xl mx-auto w-full h-full bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col border border-slate-200">
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Mailing View</span>
          </div>
          <div className="p-4 border-b border-slate-100 bg-white space-y-1 flex-shrink-0">
            <div className="text-xs text-slate-500"><span className="font-bold text-slate-900">De:</span> {fromLabel}</div>
            <div className="text-xs text-slate-500"><span className="font-bold text-slate-900">Assunto:</span> {subjectLabel}</div>
          </div>
          <div className="flex-1 overflow-y-auto bg-white custom-scrollbar">
            <div className="w-full">
              {/* Header Image */}
              <img 
                src={project.imageUrl} 
                alt="Email Header" 
                className="w-full h-auto block" 
              />
              
              {/* Text Body - Uses bodyContent if available, otherwise fullContent for legacy behavior */}
              {(project.id === '1' || project.bodyContent) ? (
                <div className="p-8 md:p-12 text-slate-700 leading-relaxed whitespace-pre-wrap font-sans text-sm md:text-base border-x border-slate-50">
                  {project.bodyContent || project.fullContent}
                </div>
              ) : null}

              {/* Footer Image */}
              {project.footerImageUrl && (
                 <img src={project.footerImageUrl} alt="Email Footer" className="w-full h-auto block border-t border-slate-50" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // WhatsApp Simulation Component
  const WhatsAppSimulation = () => {
    const isFebreMaculosa = project.id === '20';
    const isTVCorporativa = project.id === '14';
    
    return (
      <div className="flex flex-col h-full bg-[#fde7cf]/30 p-4 md:p-8 overflow-hidden items-center justify-center relative">
        <div className="relative w-[280px] md:w-[340px] h-full max-h-[650px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl ring-4 ring-slate-800 border-4 border-slate-700 overflow-hidden flex flex-col">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
          
          {/* Screen Content */}
          <div className="flex-1 bg-[#e5ddd5] rounded-[2.2rem] overflow-hidden flex flex-col relative">
            {/* Header */}
            <div className="bg-[#075e54] text-white p-4 pt-8 flex items-center gap-3 shrink-0">
               <i className="fas fa-arrow-left text-sm"></i>
               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                 <i className="fas fa-user text-xs"></i>
               </div>
               <div>
                 <p className="text-xs font-bold leading-none">Comunicação Interna</p>
                 <p className="text-[8px] opacity-70">online</p>
               </div>
            </div>
            
            {/* Messages Area */}
            <div className="flex-1 p-3 overflow-y-auto space-y-4 bg-[url('https://i.pinimg.com/originals/ab/ab/60/abab60f03222442475e5470d0d8296a2.jpg')] bg-repeat bg-contain custom-scrollbar">
               {!isFebreMaculosa && !isTVCorporativa && (
                 <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-[10px] relative">
                    {project.description}
                    <span className="text-[8px] text-slate-400 block text-right mt-1">10:00</span>
                 </div>
               )}
               
               <div className="bg-white p-1 rounded-lg rounded-tl-none shadow-sm max-w-[95%] overflow-hidden cursor-zoom-in" onClick={toggleFullScreen}>
                  <img src={project.imageUrl} alt="WhatsApp Image 1" className="w-full h-auto rounded-md" />
                  <span className="text-[8px] text-slate-400 block text-right mt-1 px-1">10:01</span>
               </div>

               {isFebreMaculosa && (
                 <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[90%] text-[10px] relative whitespace-pre-wrap leading-relaxed">
                    {"Cuidar da nossa saúde também faz parte da rotina. 💚\n\nA febre maculosa é transmitida pelo carrapato-estrela e a informação é a melhor forma de prevenção. Por isso, compartilhamos este material com orientações importantes para que todos fiquem atentos aos cuidados no dia a dia, especialmente em áreas com vegetação.\n\nAcompanhem os comunicados por e-mail e na TV corporativa para saber mais sobre a doença, os sinais de alerta e as formas de prevenção. \n\nInformação também é cuidado!"}
                    <span className="text-[8px] text-slate-400 block text-right mt-1">10:02</span>
                 </div>
               )}

               {isTVCorporativa && (
                 <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[90%] text-[10px] relative whitespace-pre-wrap leading-relaxed">
                    {"Chegou novidade por aqui 📺✨\n\nA TV Klabin já está na nossa unidade! Um novo canal para acompanhar comunicados, informações e conteúdos importantes do dia a dia, tudo em um só lugar.\n\nFique de olho na TV corporativa e acompanhe as atualizações."}
                    <span className="text-[8px] text-slate-400 block text-right mt-1">10:02</span>
                 </div>
               )}

               {project.secondaryImageUrl && (
                 <div className="bg-white p-1 rounded-lg rounded-tl-none shadow-sm max-w-[95%] overflow-hidden cursor-zoom-in" onClick={toggleFullScreen}>
                    <img src={project.secondaryImageUrl} alt="WhatsApp Image 2" className="w-full h-auto rounded-md" />
                    <span className="text-[8px] text-slate-400 block text-right mt-1 px-1">10:03</span>
               </div>
               )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProjectDetails = () => (
    <div className={`p-8 md:p-12 overflow-y-auto flex flex-col h-full ${isMediaFullScreen ? 'hidden md:flex md:w-1/3 border-l' : 'md:w-1/2'}`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-[#f83e02] font-bold tracking-widest text-[10px] uppercase mb-2 block">
            {project.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif-display leading-tight italic">{project.title}</h2>
        </div>
      </div>

      <div className="prose prose-slate mb-8">
        <p className="text-slate-600 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className={`rounded-3xl p-6 mb-8 border transition-all ${isPressScience || isArticle ? 'bg-[#feb431]/10 border-[#feb431]/20 italic font-serif' : 'bg-white/60 border-slate-200'}`}>
        <h4 className="font-bold text-slate-900 mb-4 uppercase text-[10px] tracking-widest not-italic font-sans">
          {isArticle ? 'Conteúdo' : 'Estratégia e Impacto'}
        </h4>
        
        {(isPressScience || isArticle) && project.fullContentTitle && (
          <h3 className="text-xl font-bold text-slate-900 mb-2 not-italic font-outfit leading-snug">
            {project.fullContentTitle}
          </h3>
        )}
        
        <p className={`${isPressScience || isArticle ? 'text-slate-800 text-base whitespace-pre-wrap' : 'text-slate-600'} leading-relaxed text-sm`}>
          {project.fullContent || 'A peça foi estrategicamente planejada para otimizar o fluxo de informação e garantir que a mensagem central seja absorvida de forma intuitiva pelo público-alvo.'}
        </p>
      </div>

      <div className="mt-auto space-y-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-[#f83e02]/10 text-[#f83e02] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-end border-t border-slate-200 pt-8">
          <Button onClick={onClose} size="sm" variant="outline" className="text-[#f83e02] border-[#f83e02] hover:bg-[#f83e02] hover:text-white">
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className={`bg-[#fde7cf] md:rounded-[2.5rem] w-full max-w-7xl h-full md:max-h-[92vh] overflow-hidden flex flex-col md:flex-row shadow-3xl animate-in zoom-in-95 duration-500 relative`}>
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[60] p-3 text-white bg-[#f83e02]/80 rounded-full transition-all shadow-xl md:hidden"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Visual Content Area */}
        <div className={`relative transition-all duration-500 flex flex-col bg-slate-50/10 ${isMediaFullScreen ? 'w-full' : 'md:w-1/2 w-full h-[50vh] md:h-full border-b md:border-b-0 md:border-r border-[#f83e02]/10'}`}>
          
          <div className="absolute top-6 left-6 z-50 flex gap-3">
             <button 
               onClick={toggleFullScreen}
               className="p-3 bg-white/80 backdrop-blur-md text-[#f83e02] rounded-xl hover:bg-white transition-all shadow-lg group"
               title={isMediaFullScreen ? "Sair da tela cheia" : "Ver em tela cheia"}
             >
               <i className={`fas ${isMediaFullScreen ? 'fa-compress-arrows-alt' : 'fa-expand-alt'} transition-transform group-hover:scale-110`}></i>
             </button>
             {(isPressScience || isArticle) && project.sourceUrl && (
               <a 
                href={project.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-[#f83e02] text-white rounded-xl hover:bg-slate-900 transition-all shadow-lg flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-5"
               >
                Site <i className="fas fa-external-link-alt"></i>
               </a>
             )}
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
            {isMailing ? (
              <MailingSimulation />
            ) : isWhatsApp ? (
              <WhatsAppSimulation />
            ) : (
              <div className={`w-full flex-1 flex items-start justify-center p-4 md:p-12 ${isMediaFullScreen ? 'bg-slate-900/10' : ''}`}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className={`w-full h-auto object-contain max-w-full ${isMediaFullScreen ? 'md:max-w-4xl' : ''} shadow-2xl rounded-lg bg-white`}
                />
              </div>
            )}
          </div>
        </div>

        {/* Details Panel */}
        <ProjectDetails />

        {/* Desktop Close Button (Floating) */}
        {!isMediaFullScreen && (
          <button 
            onClick={onClose}
            className="hidden md:flex absolute top-8 right-8 z-[60] p-4 text-slate-400 hover:text-[#f83e02] bg-white/50 backdrop-blur-md hover:bg-white rounded-2xl transition-all shadow-sm"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        )}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(248, 62, 2, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(248, 62, 2, 0.4);
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;