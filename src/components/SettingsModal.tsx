import { useEffect, useState } from 'react';
import { MYSTERY_DATA, MysteryType, getSeason } from '../prayerEngine';

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (m: MysteryType | null) => void;
  value: MysteryType | null;
  language: 'id' | 'en';
}

const OPTIONS = Object.keys(MYSTERY_DATA) as MysteryType[];

export default function SettingsModal({ open, onClose, onSave, value, language }: Props) {
  const [draft, setDraft] = useState<MysteryType | null>(value);
  const id = language === 'id';
  const season = getSeason(new Date());

  useEffect(() => { if (open) setDraft(value); }, [open, value]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const choices: { key: MysteryType | null; label: string; hint?: string }[] = [
    { key: null, label: id ? 'Otomatis' : 'Automatic', hint: id ? 'Sesuai hari ini' : "Based on today's day" },
    ...OPTIONS.map((k) => ({ key: k, label: MYSTERY_DATA[k].name[language] })),
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={id ? 'Pengaturan' : 'Settings'} onClick={(e) => e.stopPropagation()} className="w-full max-w-md bg-white rounded-3xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-xl font-serif">{id ? 'Pengaturan' : 'Settings'}</h2>
          <button onClick={onClose} aria-label={id ? 'Tutup' : 'Close'} className="w-8 h-8 rounded-full hover:bg-stone-100 text-xl leading-none">×</button>
        </div>
        <p className="text-sm text-stone-500 mb-4">
          {id ? 'Pilih peristiwa doa' : 'Choose the mysteries'}
        </p>
        {season && (
          <div className="flex items-center justify-between gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4 text-sm">
            <span>
              {season.name[language]} — {id ? 'disarankan' : 'suggested'}: <b>{MYSTERY_DATA[season.mystery].name[language]}</b>
            </span>
            <button onClick={() => setDraft(season.mystery)} disabled={draft === season.mystery} className="shrink-0 text-amber-700 font-medium underline disabled:no-underline disabled:opacity-50">
              {draft === season.mystery ? (id ? 'Dipilih' : 'Selected') : (id ? 'Pilih' : 'Use')}
            </button>
          </div>
        )}
        <div role="radiogroup" className="space-y-2 mb-6">
          {choices.map(({ key, label, hint }) => (
            <button
              key={key ?? 'auto'}
              role="radio"
              aria-checked={draft === key}
              onClick={() => setDraft(key)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition flex items-center gap-3 ${draft === key ? 'border-amber-600 bg-amber-50' : 'border-stone-200 hover:bg-stone-50'}`}
            >
              <span className={`w-4 h-4 rounded-full border-2 shrink-0 ${draft === key ? 'border-amber-600 bg-amber-600 ring-2 ring-inset ring-white' : 'border-stone-300'}`} />
              <span>
                <span className="block font-medium">{label}</span>
                {hint && <span className="block text-xs text-stone-500">{hint}</span>}
              </span>
            </button>
          ))}
        </div>
        <button onClick={() => { onSave(draft); onClose(); }} className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-medium transition">
          {id ? 'Simpan' : 'Save'}
        </button>
      </div>
    </div>
  );
}
