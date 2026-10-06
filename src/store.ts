import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MysteryType } from './prayerEngine';

interface PrayerState {
  language: 'id' | 'en';
  fontSize: 'sm' | 'md' | 'lg' | 'xl';
  activeMystery: MysteryType | null;
  mysteryOverride: MysteryType | null;
  currentStep: number;
  setLanguage: (lang: 'id' | 'en') => void;
  setFontSize: (size: 'sm' | 'md' | 'lg' | 'xl') => void;
  setActiveMystery: (mystery: MysteryType | null) => void;
  setMysteryOverride: (mystery: MysteryType | null) => void;
  setCurrentStep: (step: number) => void;
}

export const usePrayerStore = create<PrayerState>()(
  persist(
    (set) => ({
      language: 'id',
      fontSize: 'md',
      activeMystery: null,
      mysteryOverride: null,
      currentStep: 0,
      setLanguage: (language) => set({ language }),
      setFontSize: (fontSize) => set({ fontSize }),
      setActiveMystery: (activeMystery) => set({ activeMystery, currentStep: 0 }),
      setMysteryOverride: (mysteryOverride) => set({ mysteryOverride }),
      setCurrentStep: (currentStep) => set({ currentStep }),
    }),
    { name: 'prayer-settings' }
  )
);
