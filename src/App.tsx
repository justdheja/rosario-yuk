import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import BeadRing from './components/BeadRing';
import { usePrayerStore } from './store';
import { getMysteryForDay, MYSTERY_DATA, PRAYER_LABELS, PRAYER_TEXTS, ROSARY_STRUCTURE } from './prayerEngine';

const FONT_CLASS = { sm: 'text-sm', md: 'text-base', lg: 'text-lg', xl: 'text-xl' };

export default function App() {
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(0);
  const { language, setLanguage, activeMystery, setActiveMystery, currentStep, setCurrentStep, fontSize, setFontSize } = usePrayerStore();
  const [cardEl, setCardEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const today = new Date();
    const mystery = getMysteryForDay(today);
    setActiveMystery(mystery);
    
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [setActiveMystery]);

  if (loading) return <Loader />;

  const mystery = activeMystery ? MYSTERY_DATA[activeMystery] : null;
  const currentSection = ROSARY_STRUCTURE[currentStep];

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -50 && currentStep < ROSARY_STRUCTURE.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    } else if (info.offset.x > 50 && currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const beadCount = ROSARY_STRUCTURE.length;

  return (
    <div className="min-h-screen bg-stone-50 p-6 text-stone-900 transition-all duration-300 overflow-hidden flex flex-col items-center">
      <header className="w-full max-w-2xl flex justify-between items-center mb-8">
        <h1>
          <img src={`${import.meta.env.BASE_URL}icon.png`} alt="Rosario-Yuk" className="h-12 w-12 object-contain" />
        </h1>
        <div className="flex gap-2">
          <div className="flex items-center gap-1 bg-white rounded-full p-1 shadow-sm border border-stone-200">
            <button onClick={() => setFontSize('sm')} disabled={fontSize === 'sm'} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 disabled:bg-amber-100 disabled:font-bold">A-</button>
            <button onClick={() => setFontSize('md')} disabled={fontSize === 'md'} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 disabled:bg-amber-100 disabled:font-bold">A</button>
            <button onClick={() => setFontSize('lg')} disabled={fontSize === 'lg'} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 disabled:bg-amber-100 disabled:font-bold">A+</button>
          </div>
          <button onClick={() => setLanguage(language === 'id' ? 'en' : 'id')} className="bg-amber-100 hover:bg-amber-200 px-4 py-2 rounded-full text-sm font-medium transition">
            {language === 'id' ? 'English' : 'Bahasa Indonesia'}
          </button>
        </div>
      </header>
      
      <main className={`relative w-full max-w-2xl flex flex-col items-center py-10 ${FONT_CLASS[fontSize] ?? 'text-base'}`}>
        <div className="relative w-full">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentStep}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              ref={setCardEl}
              className="w-full p-8 bg-white rounded-3xl shadow-sm border border-amber-100 cursor-grab"
          >
            <h2 className="text-sm uppercase tracking-widest text-amber-600 mb-2">
              {mystery?.name[language]}
            </h2>
            <h3 className="text-3xl font-serif text-stone-900 mb-8">
              {currentSection.title[language]}
            </h3>
            {mystery && currentSection.decade && (
              <p className="text-xl font-serif text-amber-800 mb-8">
                {mystery.decades[currentSection.decade - 1].title[language]}
              </p>
            )}

            {currentSection.prayers.length > 0 && (
              <div className="text-left bg-stone-50 p-6 rounded-xl mb-8 space-y-4">
                {currentSection.prayers.map((p, idx) => {
                  const key = p as keyof typeof PRAYER_TEXTS;
                  return (
                    <p key={idx}><strong>{PRAYER_LABELS[key][language]}:</strong> {PRAYER_TEXTS[key][language]}</p>
                  );
                })}
              </div>
            )}
            <p className="text-stone-400 text-sm italic">Swipe to navigate</p>
          </motion.div>
          </AnimatePresence>

          <BeadRing
            count={beadCount}
            current={currentStep}
            targetEl={cardEl}
          />
        </div>
      </main>
    </div>
  );
}

