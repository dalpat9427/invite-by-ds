import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { categoryDesigns } from '../data/designs';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CategoryGallery() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedDesignIndex, setSelectedDesignIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (selectedDesignIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedDesignIndex(null);
      } else if (e.key === 'ArrowRight' && selectedDesignIndex !== null) {
        setSelectedDesignIndex(prev => (prev !== null && prev < (categoryDesigns[id || '']?.length || 0) - 1) ? prev + 1 : prev);
      } else if (e.key === 'ArrowLeft' && selectedDesignIndex !== null) {
        setSelectedDesignIndex(prev => (prev !== null && prev > 0) ? prev - 1 : prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedDesignIndex, id]);

  if (!id || !categoryDesigns[id]) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 px-6">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-gold-soft mb-6">Category Not Found</h2>
          <button onClick={() => navigate('/')} className="btn-gold">Return to Home</button>
        </div>
      </div>
    );
  }

  const title = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const designs = categoryDesigns[id];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate('/')} 
          className="text-muted hover:text-gold mb-12 flex items-center gap-2 transition-colors"
        >
          &larr; Back to Home
        </button>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl mb-4 text-gold-soft">{title} Collection</h1>
          <p className="text-muted text-lg mb-16">Browse through our exclusive {title.toLowerCase()} invitation designs.</p>
        </motion.div>

        {designs.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-lg border border-gold-soft/20">
            <h3 className="font-serif text-2xl text-gold-soft mb-2">No Designs Yet</h3>
            <p className="text-muted">We are currently updating our {title.toLowerCase()} collection. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {designs.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="group cursor-pointer flex flex-col"
              >
                <div 
                  onClick={() => setSelectedDesignIndex(index)} 
                  className="aspect-[3/4] bg-white/5 mb-4 rounded-lg flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-gold-soft/50 transition-colors relative"
                >
                  {design.imageUrl ? (
                    <img src={design.imageUrl} alt={design.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <span className="text-muted/30 font-serif">Image</span>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="btn-gold">View Design</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedDesignIndex !== null && designs[selectedDesignIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedDesignIndex(null)}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedDesignIndex(null); }}
                className="absolute top-4 right-4 md:top-6 md:right-8 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white/90 hover:text-white transition-all z-[10000] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <div 
                className="relative w-full max-w-4xl max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedDesignIndex > 0 && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDesignIndex(selectedDesignIndex - 1);
                    }}
                    className="absolute left-0 md:-left-16 p-2 text-white/50 hover:text-white transition-colors z-[10000]"
                  >
                    <ChevronLeft className="w-12 h-12" />
                  </button>
                )}

                {designs[selectedDesignIndex].imageUrl ? (
                  <img 
                    src={designs[selectedDesignIndex].imageUrl} 
                    alt={designs[selectedDesignIndex].title || 'Design Preview'} 
                    className="max-h-[90vh] max-w-full object-contain rounded-md shadow-2xl"
                  />
                ) : (
                  <div className="w-[400px] h-[600px] bg-white/5 rounded-md flex items-center justify-center">
                     <span className="text-muted/30 font-serif text-2xl">Image Not Found</span>
                  </div>
                )}

                {selectedDesignIndex < designs.length - 1 && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDesignIndex(selectedDesignIndex + 1);
                    }}
                    className="absolute right-0 md:-right-16 p-2 text-white/50 hover:text-white transition-colors z-[10000]"
                  >
                    <ChevronRight className="w-12 h-12" />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
