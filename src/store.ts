import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MYSTERY_DATA, MysteryType } from './prayerEngine';

const isMystery = (v: unknown): v is MysteryType => typeof v === 'string' && v in MYSTERY_DATA;
const isOneOf = <T extends string>(v: unknown, opts: readonly T[]): v is T => opts.includes(v as T);

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
    {
      name: 'prayer-settings',
      // Guard: stale/tampered localStorage must not crash MYSTERY_DATA lookups.
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<PrayerState>;
        return {
          ...current,
          language: isOneOf(p.language, ['id', 'en'] as const) ? p.language : current.language,
          fontSize: isOneOf(p.fontSize, ['sm', 'md', 'lg', 'xl'] as const) ? p.fontSize : current.fontSize,
          activeMystery: isMystery(p.activeMystery) ? p.activeMystery : null,
          mysteryOverride: isMystery(p.mysteryOverride) ? p.mysteryOverride : null,
          currentStep: Number.isInteger(p.currentStep) && p.currentStep! >= 0 ? p.currentStep! : 0,
        };
      },
    }
  )
);
