export type MysteryType = 'joyful' | 'luminous' | 'sorrowful' | 'glorious';

export const PRAYER_TEXTS = {
  signOfTheCross: { 
    id: 'Demi nama Bapa, dan Putra, dan Roh Kudus. Amin.', 
    en: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.' 
  },
  apostlesCreed: { 
    id: 'Aku percaya akan Allah, Bapa yang Mahakuasa, Pencipta langit dan bumi. Dan akan Yesus Kristus, Putra-Nya yang tunggal, Tuhan kita, yang dikandung dari Roh Kudus, dilahirkan oleh Perawan Maria; yang menderita sengsara dalam pemerintahan Pontius Pilatus, disalibkan, wafat dan dimakamkan; yang turun ke dalam tempat penantian, pada hari ketiga bangkit dari antara orang mati; yang naik ke surga, duduk di sebelah kanan Allah Bapa yang Mahakuasa; dari situ Ia akan datang mengadili orang hidup dan mati. Aku percaya akan Roh Kudus, Gereja Katolik yang kudus, persekutuan para kudus, pengampunan dosa, kebangkitan badan, kehidupan kekal. Amin.', 
    en: 'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.' 
  },
  ourFather: { 
    id: 'Bapa kami yang ada di surga, dimuliakanlah nama-Mu, datanglah kerajaan-Mu, jadilah kehendak-Mu di atas bumi seperti di dalam surga. Berilah kami rezeki pada hari ini, dan ampunilah kesalahan kami, seperti kami pun mengampuni yang bersalah kepada kami. Dan janganlah masukkan kami ke dalam pencobaan, tetapi bebaskanlah kami dari yang jahat. Amin.', 
    en: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.' 
  },
  hailMary: { 
    id: 'Salam Maria, penuh rahmat, Tuhan sertamu, terpujilah engkau di antara wanita, dan terpujilah buah tubuhmu, Yesus. Santa Maria, Bunda Allah, doakanlah kami yang berdosa ini sekarang dan waktu kami mati. Amin.', 
    en: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.' 
  },
  gloryBe: { 
    id: 'Kemuliaan kepada Bapa dan Putra dan Roh Kudus, seperti pada permulaan, sekarang, selalu, dan sepanjang segala abad. Amin.', 
    en: 'Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.' 
  },
  fatimaPrayer: { 
    id: 'Ya Yesus yang baik, ampunilah dosa-dosa kami, selamatkanlah kami dari api neraka, dan hantarlah jiwa-jiwa ke surga, terutama mereka yang sangat membutuhkan kerahiman-Mu. Amin.', 
    en: 'O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those who are most in need of thy mercy. Amen.' 
  },
  hailHolyQueen: { 
    id: 'Salam, ya Ratu, Bunda yang bertakhta dalam kasih sayang, ya kehidupan, penghiburan, dan harapan kami, salam. Kepada-Mulah kami berseru, anak-anak Hawa yang terbuang; kepada-Mulah kami memanjatkan permohonan kami, dengan berkeluh kesah di lembah duka ini. Maka tunjukkanlah kepada kami, ya Pengantara kami, wajah-Mu yang penuh kasih setelah masa pembuangan kami ini berakhir, dan tunjukkanlah kepada kami Yesus, buah rahim-Mu yang terberkati, ya Perawan Maria yang murah hati, ya Bunda yang penuh kasih, ya Bunda yang manis. Amin.', 
    en: 'Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope, to thee do we cry, poor banished children of Eve: to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious Advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus, O clement, O loving, O sweet Virgin Mary. Amen.' 
  },
  rosaryVersicle: {
    id: 'V. Doakanlah kami, ya Santa Bunda Allah. R. Supaya kami layak menerima janji Kristus.',
    en: 'V. Pray for us, O holy Mother of God. R. That we may be made worthy of the promises of Christ.'
  },
  rosaryConcluding: {
    id: 'Ya Allah, Putra-Mu yang tunggal telah menyediakan bagi kami pahala hidup kekal melalui hidup, wafat, dan kebangkitan-Nya. Kami mohon, semoga dengan merenungkan misteri-misteri ini dalam rosario suci Santa Perawan Maria, kami meneladan apa yang terkandung di dalamnya dan memperoleh apa yang dijanjikan. Demi Kristus, Tuhan kami. Amin.',
    en: 'O God, whose only-begotten Son, by his life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech thee, that meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise. Through the same Christ our Lord. Amen.'
  },
};

export const PRAYER_LABELS: Record<keyof typeof PRAYER_TEXTS, { id: string; en: string }> = {
  signOfTheCross: { id: 'Tanda Salib', en: 'Sign of the Cross' },
  apostlesCreed: { id: 'Aku Percaya', en: 'Apostles\' Creed' },
  ourFather: { id: 'Bapa Kami', en: 'Our Father' },
  hailMary: { id: 'Salam Maria', en: 'Hail Mary' },
  gloryBe: { id: 'Kemuliaan', en: 'Glory Be' },
  fatimaPrayer: { id: 'Doa Fatima', en: 'Fatima Prayer' },
  hailHolyQueen: { id: 'Salam Ya Ratu', en: 'Hail Holy Queen' },
  rosaryVersicle: { id: 'Doa Singkat', en: 'Versicle' },
  rosaryConcluding: { id: 'Doa Penutup', en: 'Concluding Prayer' },
};

const ORDINAL_SUFFIX = ['st', 'nd', 'rd', 'th', 'th'];

export const ROSARY_STRUCTURE = [
  // Opening
  { id: 'sign', title: { id: 'Pembukaan', en: 'Opening' }, prayers: ['signOfTheCross'] },
  { id: 'creed', title: { id: 'Aku Percaya', en: 'Apostles\' Creed' }, prayers: ['apostlesCreed'] },
  { id: 'our-father-intentions', title: { id: 'Bapa Kami', en: 'Our Father' }, prayers: ['ourFather'] },
  { id: 'hail-mary-1', title: { id: 'Salam Maria (Iman)', en: 'Hail Mary (Faith)' }, prayers: ['hailMary'] },
  { id: 'hail-mary-2', title: { id: 'Salam Maria (Harapan)', en: 'Hail Mary (Hope)' }, prayers: ['hailMary'] },
  { id: 'hail-mary-3', title: { id: 'Salam Maria (Kasih)', en: 'Hail Mary (Charity)' }, prayers: ['hailMary'] },
  { id: 'glory-be', title: { id: 'Kemuliaan', en: 'Glory Be' }, prayers: ['gloryBe'] },
  
  // Decades
  ...Array.from({ length: 5 }).flatMap((_, i) => {
    const n = i + 1;
    const en = `${n}${ORDINAL_SUFFIX[i]} Decade`;
    return [
      { id: `d${n}-announce`, decade: n, title: { id: `Peristiwa ${n}`, en }, prayers: [] as string[] },
      { id: `d${n}-meditation`, decade: n, title: { id: `Peristiwa ${n} (Bapa Kami)`, en: `${en} (Our Father)` }, prayers: ['ourFather'] },
      ...Array.from({ length: 10 }).map((_, j) => ({
        id: `d${n}-hail-${j+1}`,
        decade: n,
        title: { id: `Peristiwa ${n} (${j+1}/10)`, en: `${en} (${j+1}/10)` },
        prayers: ['hailMary']
      })),
      { id: `d${n}-end`, decade: n, title: { id: `Peristiwa ${n} (Penutup)`, en: `${en} (Closing)` }, prayers: ['gloryBe', 'fatimaPrayer'] }
    ];
  }),
  
  // Closing
  { id: 'hail-holy-queen', title: { id: 'Salam Ya Ratu', en: 'Hail Holy Queen' }, prayers: ['hailHolyQueen'] },
  { id: 'closing-prayer', title: { id: 'Doa Penutup', en: 'Concluding Prayer' }, prayers: ['rosaryVersicle', 'rosaryConcluding'] },
  { id: 'sign-close', title: { id: 'Penutup', en: 'Closing' }, prayers: ['signOfTheCross'] }
];

export const getMysteryForDay = (date: Date): MysteryType => {
  const day = date.getDay();
  switch (day) {
    case 1: case 6: return 'joyful';
    case 2: case 5: return 'sorrowful';
    case 3: case 0: return 'glorious';
    case 4: return 'luminous';
    default: return 'joyful';
  }
};

export const MYSTERY_DATA = {
  joyful: { id: 'joyful', name: { id: 'Peristiwa Gembira', en: 'Joyful Mysteries' }, decades: [
      { id: 1, title: { id: 'Kabar Gembira', en: 'The Annunciation' } },
      { id: 2, title: { id: 'Kunjungan Maria', en: 'The Visitation' } },
      { id: 3, title: { id: 'Kelahiran Yesus', en: 'The Nativity' } },
      { id: 4, title: { id: 'Yesus di Bait Allah', en: 'The Presentation' } },
      { id: 5, title: { id: 'Yesus diketemukan', en: 'The Finding in the Temple' } },
  ]},
  luminous: { id: 'luminous', name: { id: 'Peristiwa Terang', en: 'Luminous Mysteries' }, decades: [
      { id: 1, title: { id: 'Baptisan di Yordan', en: 'The Baptism in the Jordan' } },
      { id: 2, title: { id: 'Pesta Pernikahan di Kana', en: 'The Wedding at Cana' } },
      { id: 3, title: { id: 'Pewartaan Kerajaan Allah', en: 'The Proclamation of the Kingdom' } },
      { id: 4, title: { id: 'Yesus menampakkan kemuliaan', en: 'The Transfiguration' } },
      { id: 5, title: { id: 'Penetapan Ekaristi', en: 'The Institution of the Eucharist' } },
  ]},
  sorrowful: { id: 'sorrowful', name: { id: 'Peristiwa Sedih', en: 'Sorrowful Mysteries' }, decades: [
      { id: 1, title: { id: 'Yesus berdoa di Getsemani', en: 'The Agony in the Garden' } },
      { id: 2, title: { id: 'Yesus didera', en: 'The Scourging at the Pillar' } },
      { id: 3, title: { id: 'Yesus dimahkotai duri', en: 'The Crowning with Thorns' } },
      { id: 4, title: { id: 'Yesus memanggul salib', en: 'The Carrying of the Cross' } },
      { id: 5, title: { id: 'Yesus wafat di salib', en: 'The Crucifixion and Death' } },
  ]},
  glorious: { id: 'glorious', name: { id: 'Peristiwa Mulia', en: 'Glorious Mysteries' }, decades: [
      { id: 1, title: { id: 'Yesus bangkit', en: 'The Resurrection' } },
      { id: 2, title: { id: 'Yesus naik ke surga', en: 'The Ascension' } },
      { id: 3, title: { id: 'Roh Kudus turun', en: 'The Descent of the Holy Spirit' } },
      { id: 4, title: { id: 'Maria diangkat ke surga', en: 'The Assumption' } },
      { id: 5, title: { id: 'Maria dimahkotai', en: 'The Coronation of Mary' } },
  ]}
};
