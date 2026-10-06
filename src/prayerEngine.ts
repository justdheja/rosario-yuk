export type MysteryType = 'joyful' | 'luminous' | 'sorrowful' | 'glorious';

export const PRAYER_TEXTS = {
  signOfTheCross: { 
    id: 'Dalam nama Bapa, Putra dan Roh Kudus. Amin.', 
    en: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.' 
  },
  apostlesCreed: { 
    id: 'Aku percaya akan Allah, Bapa yang Maha Kuasa, pencipta langit dan bumi. Dan akan Yesus Kristus, PuteraNya yang tunggal, Tuhan kita. Yang dikandung dari Roh Kudus, dilahirkan oleh perawan Maria. Yang menderita sengsara, dalam pemerintahan Pontius Pilatus, disalibkan, wafat dan dimakamkan. Yang turun ketempat penantian, pada hari ketiga bangkit dari antara orang mati. Yang naik ke surga, duduk disebelah kanan Allah Bapa yang Maha Kuasa. Dari situ Ia akan datang mengadili orang hidup dan mati. Aku percaya akan Roh Kudus, Gereja Katholik yang Kudus, Persekutuan para Kudus, pengampunan dosa, kebangkitan badan, kehidupan kekal. Amin.', 
    en: 'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.' 
  },
  ourFather: { 
    id: 'Bapa Kami yang ada di surga, dimuliakanlah namaMu. Datanglah KerajaanMu. Jadilah kehendakMu di atas bumi seperti di dalam surga. Berilah kami rejeki pada hari ini, dan ampunilah kesalahan kami, seperti kami pun mengampuni yang bersalah kepada kami. Dan janganlah masukkan kami ke dalam pencobaan. Tetapi bebaskanlah kami dari yang jahat. Amin.', 
    en: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.' 
  },
  hailMary: { 
    id: 'Salam Maria penuh rahmat, Tuhan sertamu. Terpujilah engkau diantara wanita dan terpujilah buah tubuhmu Yesus. Santa Maria, Bunda Allah, doakanlah kami yang berdosa ini, sekarang dan waktu kami mati. Amin.', 
    en: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.' 
  },
  gloryBe: { 
    id: 'Kemuliaan kepada Bapa dan Putra dan Roh Kudus, seperti pada permulaan, sekarang, selalu, dan sepanjang segala abad. Amin.', 
    en: 'Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.' 
  },
  fatimaPrayer: { 
    id: 'Ya Yesus yang baik, ampunilah dosa-dosa kami. Selamatkanlah kami dari api neraka, dan hantarlah jiwa-jiwa ke surga, terlebih jiwa-jiwa yang sangat membutuhkan kerahiman-Mu. Amin.', 
    en: 'O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those who are most in need of thy mercy. Amen.' 
  },
  praised: {
    id: 'Terpujilah nama Yesus, Maria dan Yusuf, sekarang dan selama-lamanya. Amin.',
    en: 'Praised be the names of Jesus, Mary and Joseph, now and forever. Amen.'
  },
  intention: {
    id: 'Doakan ujud pribadi anda (jika ada)',
    en: 'Pray your personal intention (if any)'
  },
};

export const PRAYER_LABELS: Record<keyof typeof PRAYER_TEXTS, { id: string; en: string }> = {
  signOfTheCross: { id: 'Tanda Salib (♰)', en: 'Sign of the Cross (♰)' },
  apostlesCreed: { id: 'Aku Percaya', en: 'Apostles\' Creed' },
  ourFather: { id: 'Bapa Kami', en: 'Our Father' },
  hailMary: { id: 'Salam Maria', en: 'Hail Mary' },
  gloryBe: { id: 'Kemuliaan', en: 'Glory Be' },
  fatimaPrayer: { id: 'Doa Fatima', en: 'Fatima Prayer' },
  praised: { id: 'Terpujilah', en: 'Praised Be' },
  intention: { id: 'Ujud', en: 'Intention' }
};

const ORDINAL_SUFFIX = ['st', 'nd', 'rd', 'th', 'th'];

export const ROSARY_STRUCTURE = [
  // Opening
  { id: 'sign', title: { id: 'Pembukaan (Tanda Salib)', en: 'Opening (Sign of the Cross)' }, prayers: ['signOfTheCross', 'apostlesCreed'] },
  { id: 'glory-be-open', title: { id: 'Kemuliaan', en: 'Glory Be' }, prayers: ['gloryBe', 'praised', 'ourFather'] },
  { id: 'hail-mary-1', title: { id: 'Salam Putri Allah Bapa', en: 'Hail, Daughter of God the Father' }, prayers: ['hailMary'] },
  { id: 'hail-mary-2', title: { id: 'Salam Bunda Allah Putra', en: 'Hail, Mother of God the Son' }, prayers: ['hailMary'] },
  { id: 'hail-mary-3', title: { id: 'Salam Mempelai Allah Roh Kudus', en: 'Hail, Spouse of God the Holy Spirit' }, prayers: ['hailMary'] },
  
  // Decades
  ...Array.from({ length: 5 }).flatMap((_, i) => {
    const n = i + 1;
    const en = `${n}${ORDINAL_SUFFIX[i]} Decade`;
    return [
      { id: `d${n}-announce`, decade: n, title: { id: `Peristiwa ${n}`, en }, prayers: ['gloryBe', 'praised', 'fatimaPrayer', 'ourFather'] },
      ...Array.from({ length: 10 }).map((_, j) => ({
        id: `d${n}-hail-${j+1}`,
        decade: n,
        title: { id: `Peristiwa ${n} - Salam Maria (${j+1}/10)`, en: `${en} - Hail Mary (${j+1}/10)` },
        prayers: ['hailMary']
      }))
    ];
  }),

  // Closing
  { id: 'sign-close', title: { id: 'Penutup - Tanda Salib', en: 'Closing - Sign of the Cross' }, prayers: ['gloryBe', 'praised', 'fatimaPrayer', 'intention', 'signOfTheCross'] }
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

// Gregorian Easter (Meeus/Jones/Butcher)
const easter = (y: number) => {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100;
  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const n = h + l - 7 * m + 114;
  return new Date(y, Math.floor(n / 31) - 1, (n % 31) + 1);
};
const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

export type Season = { id: 'lent' | 'advent'; mystery: MysteryType; name: { id: string; en: string } };

// Lent: Ash Wednesday through Holy Saturday. Advent: 1st Sunday of Advent through Dec 24.
export const getSeason = (date: Date): Season | null => {
  const t = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const y = date.getFullYear();
  const e = easter(y);
  if (t >= addDays(e, -46).getTime() && t < e.getTime())
    return { id: 'lent', mystery: 'sorrowful', name: { id: 'Masa Prapaskah', en: 'Lent' } };
  const xmas = new Date(y, 11, 25);
  const adventStart = addDays(xmas, -((xmas.getDay() || 7) + 21));
  if (t >= adventStart.getTime() && t < xmas.getTime())
    return { id: 'advent', mystery: 'joyful', name: { id: 'Masa Adven', en: 'Advent' } };
  return null;
};

// Reading text and titles follow https://www.imankatolik.or.id/doarosario{gembira,sedih,mulia,terang}.html (Indonesian only).
export const MYSTERY_DATA = {
  joyful: { id: 'joyful', name: { id: 'Peristiwa Gembira', en: 'Joyful Mysteries' }, decades: [
      { id: 1, title: { id: "Maria menerima kabar gembira dari Malaikat Gabriel", en: "The Annunciation" }, ref: "Luk 1:26-38", text: "Dalam bulan yang keenam Allah menyuruh malaikat Gabriel pergi ke sebuah kota di Galilea bernama Nazaret, kepada seorang perawan yang bertunangan dengan seorang bernama Yusuf dari keluarga Daud; nama perawan itu Maria. Ketika malaikat itu masuk ke rumah Maria, ia berkata: \"Salam, hai engkau yang dikaruniai, Tuhan menyertai engkau.\" Maria terkejut mendengar perkataan itu, lalu bertanya di dalam hatinya, apakah arti salam itu. Kata malaikat itu kepadanya: \"Jangan takut, hai Maria, sebab engkau beroleh kasih karunia di hadapan Allah. Sesungguhnya engkau akan mengandung dan akan melahirkan seorang anak laki-laki dan hendaklah engkau menamai Dia Yesus. Ia akan menjadi besar dan akan disebut Anak Allah Yang Mahatinggi. Dan Tuhan Allah akan mengaruniakan kepada-Nya takhta Daud, bapa leluhur-Nya, dan Ia akan menjadi raja atas kaum keturunan Yakub sampai selama-lamanya dan Kerajaan-Nya tidak akan berkesudahan.\" Kata Maria kepada malaikat itu: \"Bagaimana hal itu mungkin terjadi, karena aku belum bersuami?\" Jawab malaikat itu kepadanya: \"Roh Kudus akan turun atasmu dan kuasa Allah Yang Mahatinggi akan menaungi engkau; sebab itu anak yang akan kaulahirkan itu akan disebut kudus, Anak Allah. Dan sesungguhnya, Elisabet, sanakmu itu, iapun sedang mengandung seorang anak laki-laki pada hari tuanya dan inilah bulan yang keenam bagi dia, yang disebut mandul itu. Sebab bagi Allah tidak ada yang mustahil.\" Kata Maria: \"Sesungguhnya aku ini adalah hamba Tuhan; jadilah padaku menurut perkataanmu itu.\" Lalu malaikat itu meninggalkan dia." },
      { id: 2, title: { id: "Maria mengunjungi Elisabet, saudarinya", en: "The Visitation" }, ref: "Luk 1:39-45", text: "Beberapa waktu kemudian berangkatlah Maria dan langsung berjalan ke pegunungan menuju sebuah kota di Yehuda. Di situ ia masuk ke rumah Zakharia dan memberi salam kepada Elisabet. Dan ketika Elisabet mendengar salam Maria, melonjaklah anak yang di dalam rahimnya dan Elisabetpun penuh dengan Roh Kudus, lalu berseru dengan suara nyaring: \"Diberkatilah engkau di antara semua perempuan dan diberkatilah buah rahimmu. Siapakah aku ini sampai ibu Tuhanku datang mengunjungi aku? Sebab sesungguhnya, ketika salammu sampai kepada telingaku, anak yang di dalam rahimku melonjak kegirangan. Dan berbahagialah ia, yang telah percaya, sebab apa yang dikatakan kepadanya dari Tuhan, akan terlaksana.\"" },
      { id: 3, title: { id: "Yesus dilahirkan di Bethlehem", en: "The Nativity" }, ref: "Luk 2:1-7", text: "Pada waktu itu Kaisar Agustus mengeluarkan suatu perintah, menyuruh mendaftarkan semua orang di seluruh dunia. Inilah pendaftaran yang pertama kali diadakan sewaktu Kirenius menjadi wali negeri di Siria. Maka pergilah semua orang mendaftarkan diri, masing-masing di kotanya sendiri. Demikian juga Yusuf pergi dari kota Nazaret di Galilea ke Yudea, ke kota Daud yang bernama Betlehem, --karena ia berasal dari keluarga dan keturunan Daud--supaya didaftarkan bersama-sama dengan Maria, tunangannya, yang sedang mengandung. Ketika mereka di situ tibalah waktunya bagi Maria untuk bersalin, dan ia melahirkan seorang anak laki-laki, anaknya yang sulung, lalu dibungkusnya dengan lampin dan dibaringkannya di dalam palungan, karena tidak ada tempat bagi mereka di rumah penginapan." },
      { id: 4, title: { id: "Yesus dipersembahkan dalam Bait Allah", en: "The Presentation" }, ref: "Luk 2:22-40", text: "Dan ketika genap waktu pentahiran, menurut hukum Taurat Musa, mereka membawa Dia ke Yerusalem untuk menyerahkan-Nya kepada Tuhan, seperti ada tertulis dalam hukum Tuhan: \"Semua anak laki-laki sulung harus dikuduskan bagi Allah\",dan untuk mempersembahkan korban menurut apa yang difirmankan dalam hukum Tuhan, yaitu sepasang burung tekukur atau dua ekor anak burung merpati. Adalah di Yerusalem seorang bernama Simeon. Ia seorang yang benar dan saleh yang menantikan penghiburan bagi Israel. Roh Kudus ada di atasnya, dan kepadanya telah dinyatakan oleh Roh Kudus, bahwa ia tidak akan mati sebelum ia melihat Mesias, yaitu Dia yang diurapi Tuhan. Ia datang ke Bait Allah oleh Roh Kudus. Ketika Yesus, Anak itu, dibawa masuk oleh orang tua-Nya untuk melakukan kepada-Nya apa yang ditentukan hukum Taurat, ia menyambut Anak itu dan menatang-Nya sambil memuji Allah, katanya: \"Sekarang, Tuhan, biarkanlah hamba-Mu ini pergi dalam damai sejahtera, sesuai dengan firman-Mu, sebab mataku telah melihat keselamatan yang dari pada-Mu, yang telah Engkau sediakan di hadapan segala bangsa, yaitu terang yang menjadi penyataan bagi bangsa-bangsa lain dan menjadi kemuliaan bagi umat-Mu, Israel.\" Dan bapa serta ibu-Nya amat heran akan segala apa yang dikatakan tentang Dia. Lalu Simeon memberkati mereka dan berkata kepada Maria, ibu Anak itu: \"Sesungguhnya Anak ini ditentukan untuk menjatuhkan atau membangkitkan banyak orang di Israel dan untuk menjadi suatu tanda yang menimbulkan perbantahan dan suatu pedang akan menembus jiwamu sendiri--,supaya menjadi nyata pikiran hati banyak orang.\" Lagipula di situ ada Hana, seorang nabi perempuan, anak Fanuel dari suku Asyer. Ia sudah sangat lanjut umurnya. Sesudah kawin ia hidup tujuh tahun lamanya bersama suaminya, dan sekarang ia janda dan berumur delapan puluh empat tahun. Ia tidak pernah meninggalkan Bait Allah dan siang malam beribadah dengan berpuasa dan berdoa. Dan pada ketika itu juga datanglah ia ke situ dan mengucap syukur kepada Allah dan berbicara tentang Anak itu kepada semua orang yang menantikan kelepasan untuk Yerusalem. Dan setelah selesai semua yang harus dilakukan menurut hukum Tuhan, kembalilah mereka ke kota kediamannya, yaitu kota Nazaret di Galilea. Anak itu bertambah besar dan menjadi kuat, penuh hikmat, dan kasih karunia Allah ada pada-Nya." },
      { id: 5, title: { id: "Yesus diketemukan dalam Bait Allah", en: "The Finding in the Temple" }, ref: "Luk 2:41-52", text: "Tiap-tiap tahun orang tua Yesus pergi ke Yerusalem pada hari raya Paskah. Ketika Yesus telah berumur dua belas tahun pergilah mereka ke Yerusalem seperti yang lazim pada hari raya itu. Sehabis hari-hari perayaan itu, ketika mereka berjalan pulang, tinggallah Yesus di Yerusalem tanpa diketahui orang tua-Nya. Karena mereka menyangka bahwa Ia ada di antara orang-orang seperjalanan mereka, berjalanlah mereka sehari perjalanan jauhnya, lalu mencari Dia di antara kaum keluarga dan kenalan mereka. Karena mereka tidak menemukan Dia, kembalilah mereka ke Yerusalem sambil terus mencari Dia. Sesudah tiga hari mereka menemukan Dia dalam Bait Allah; Ia sedang duduk di tengah-tengah alim ulama, sambil mendengarkan mereka dan mengajukan pertanyaan-pertanyaan kepada mereka. Dan semua orang yang mendengar Dia sangat heran akan kecerdasan-Nya dan segala jawab yang diberikan-Nya. Dan ketika orang tua-Nya melihat Dia, tercenganglah mereka, lalu kata ibu-Nya kepada-Nya: \"Nak, mengapakah Engkau berbuat demikian terhadap kami? Bapa-Mu dan aku dengan cemas mencari Engkau.\" Jawab-Nya kepada mereka: \"Mengapa kamu mencari Aku? Tidakkah kamu tahu, bahwa Aku harus berada di dalam rumah Bapa-Ku?\" Tetapi mereka tidak mengerti apa yang dikatakan-Nya kepada mereka. Lalu Ia pulang bersama-sama mereka ke Nazaret; dan Ia tetap hidup dalam asuhan mereka. Dan ibu-Nya menyimpan semua perkara itu di dalam hatinya. Dan Yesus makin bertambah besar dan bertambah hikmat-Nya dan besar-Nya, dan makin dikasihi oleh Allah dan manusia." },
  ]},
  luminous: { id: 'luminous', name: { id: 'Peristiwa Terang', en: 'Luminous Mysteries' }, decades: [
      { id: 1, title: { id: "Yesus di baptis di sungai Yordan", en: "The Baptism in the Jordan" }, ref: "Mat 3:16-17", text: "Sesudah dibaptis, Yesus segera keluar dari air dan pada waktu itu juga langit terbuka dan Ia melihat Roh Allah seperti burung merpati turun ke atas-Nya, lalu terdengarlah suara dari sorga yang mengatakan: \"Inilah Anak-Ku yang Kukasihi, kepada-Nyalah Aku berkenan.\"" },
      { id: 2, title: { id: "Yesus menyatakan diri-Nya dalam pesta pernikahan di Kana", en: "The Wedding at Cana" }, ref: "Yoh 2:11", text: "Hal itu dibuat Yesus di Kana yang di Galilea, sebagai yang pertama dari tanda-tanda-Nya dan dengan itu Ia telah menyatakan kemuliaan-Nya, dan murid-murid-Nya percaya kepada-Nya." },
      { id: 3, title: { id: "Yesus memberitakan Kerajaan Allah dan menyerukan pertobatan", en: "The Proclamation of the Kingdom" }, ref: "Mat 4:17-23", text: "Sejak waktu itulah Yesus memberitakan: \"Bertobatlah, sebab Kerajaan Sorga sudah dekat!\" Dan ketika Yesus sedang berjalan menyusur danau Galilea, Ia melihat dua orang bersaudara, yaitu Simon yang disebut Petrus, dan Andreas, saudaranya. Mereka sedang menebarkan jala di danau, sebab mereka penjala ikan. Yesus berkata kepada mereka: \"Mari, ikutlah Aku, dan kamu akan Kujadikan penjala manusia.\" Lalu merekapun segera meninggalkan jalanya dan mengikuti Dia. Dan setelah Yesus pergi dari sana, dilihat-Nya pula dua orang bersaudara, yaitu Yakobus anak Zebedeus dan Yohanes saudaranya, bersama ayah mereka, Zebedeus, sedang membereskan jala di dalam perahu. Yesus memanggil mereka dan mereka segera meninggalkan perahu serta ayahnya, lalu mengikuti Dia. Yesuspun berkeliling di seluruh Galilea; Ia mengajar dalam rumah-rumah ibadat dan memberitakan Injil Kerajaan Allah serta melenyapkan segala penyakit dan kelemahan di antara bangsa itu." },
      { id: 4, title: { id: "Yesus menampakan kemuliaan-Nya", en: "The Transfiguration" }, ref: "Mat 7:1-9", text: "\"Jangan kamu menghakimi, supaya kamu tidak dihakimi. Karena dengan penghakiman yang kamu pakai untuk menghakimi, kamu akan dihakimi dan ukuran yang kamu pakai untuk mengukur, akan diukurkan kepadamu. Mengapakah engkau melihat selumbar di mata saudaramu, sedangkan balok di dalam matamu tidak engkau ketahui? Bagaimanakah engkau dapat berkata kepada saudaramu: Biarlah aku mengeluarkan selumbar itu dari matamu, padahal ada balok di dalam matamu. Hai orang munafik, keluarkanlah dahulu balok dari matamu, maka engkau akan melihat dengan jelas untuk mengeluarkan selumbar itu dari mata saudaramu.\" \"Jangan kamu memberikan barang yang kudus kepada anjing dan jangan kamu melemparkan mutiaramu kepada babi, supaya jangan diinjak-injaknya dengan kakinya, lalu ia berbalik mengoyak kamu.\" \"Mintalah, maka akan diberikan kepadamu; carilah, maka kamu akan mendapat; ketoklah, maka pintu akan dibukakan bagimu. Karena setiap orang yang meminta, menerima dan setiap orang yang mencari, mendapat dan setiap orang yang mengetok, baginya pintu dibukakan. Adakah seorang dari padamu yang memberi batu kepada anaknya, jika ia meminta roti?\"" },
      { id: 5, title: { id: "Yesus menetapkan Ekaristi", en: "The Institution of the Eucharist" }, ref: "Mrk 14:22-24", text: "Dan ketika Yesus dan murid-murid-Nya sedang makan, Yesus mengambil roti, mengucap berkat, memecah-mecahkannya lalu memberikannya kepada mereka dan berkata: \"Ambillah, inilah tubuh-Ku.\" Sesudah itu Ia mengambil cawan, mengucap syukur lalu memberikannya kepada mereka, dan mereka semuanya minum dari cawan itu. Dan Ia berkata kepada mereka: \"Inilah darah-Ku, darah perjanjian, yang ditumpahkan bagi banyak orang.\"" },
  ]},
  sorrowful: { id: 'sorrowful', name: { id: 'Peristiwa Sedih', en: 'Sorrowful Mysteries' }, decades: [
      { id: 1, title: { id: "Yesus berdoa kepada Bapa-Nya di surga dalam sakratul maut", en: "The Agony in the Garden" }, ref: "Luk 22:39-46", text: "Lalu pergilah Yesus ke luar kota dan sebagaimana biasa Ia menuju Bukit Zaitun. Murid-murid-Nya juga mengikuti Dia. Setelah tiba di tempat itu Ia berkata kepada mereka: \"Berdoalah supaya kamu jangan jatuh ke dalam pencobaan.\" Kemudian Ia menjauhkan diri dari mereka kira-kira sepelempar batu jaraknya, lalu Ia berlutut dan berdoa, kata-Nya: \"Ya Bapa-Ku, jikalau Engkau mau, ambillah cawan ini dari pada-Ku; tetapi bukanlah kehendak-Ku, melainkan kehendak-Mulah yang terjadi.\" Maka seorang malaikat dari langit menampakkan diri kepada-Nya untuk memberi kekuatan kepada-Nya. Ia sangat ketakutan dan makin bersungguh-sungguh berdoa. Peluh-Nya menjadi seperti titik-titik darah yang bertetesan ke tanah. Lalu Ia bangkit dari doa-Nya dan kembali kepada murid-murid-Nya, tetapi Ia mendapati mereka sedang tidur karena dukacita. Kata-Nya kepada mereka: \"Mengapa kamu tidur? Bangunlah dan berdoalah, supaya kamu jangan jatuh ke dalam pencobaan.\"" },
      { id: 2, title: { id: "Yesus didera", en: "The Scourging at the Pillar" }, ref: "Yoh 19:1", text: "Lalu Pilatus mengambil Yesus dan menyuruh orang menyesah Dia." },
      { id: 3, title: { id: "Yesus dimahkotai duri", en: "The Crowning with Thorns" }, ref: "Yoh 19:2-3", text: "Prajurit-prajurit menganyam sebuah mahkota duri dan menaruhnya di atas kepala-Nya. Mereka memakaikan Dia jubah ungu, dan sambil maju ke depan mereka berkata: \"Salam, hai raja orang Yahudi!\" Lalu mereka menampar muka-Nya." },
      { id: 4, title: { id: "Yesus memanggul salib-Nya (ke Gunung Kalvari)", en: "The Carrying of the Cross" }, ref: "Luk 23:26-32", text: "Ketika mereka membawa Yesus, mereka menahan seorang yang bernama Simon dari Kirene, yang baru datang dari luar kota, lalu diletakkan salib itu di atas bahunya, supaya dipikulnya sambil mengikuti Yesus. Sejumlah besar orang mengikuti Dia; di antaranya banyak perempuan yang menangisi dan meratapi Dia. Yesus berpaling kepada mereka dan berkata: \"Hai puteri-puteri Yerusalem, janganlah kamu menangisi Aku, melainkan tangisilah dirimu sendiri dan anak-anakmu! Sebab lihat, akan tiba masanya orang berkata: Berbahagialah perempuan mandul dan yang rahimnya tidak pernah melahirkan, dan yang susunya tidak pernah menyusui. Maka orang akan mulai berkata kepada gunung-gunung: Runtuhlah menimpa kami! dan kepada bukit-bukit: Timbunilah kami! Sebab jikalau orang berbuat demikian dengan kayu hidup, apakah yang akan terjadi dengan kayu kering?\" Dan ada juga digiring dua orang lain, yaitu dua penjahat untuk dihukum mati bersama-sama dengan Dia." },
      { id: 5, title: { id: "Yesus wafat di salib", en: "The Crucifixion and Death" }, ref: "Luk 23:44-49", text: "Ketika itu hari sudah kira-kira jam dua belas, lalu kegelapan meliputi seluruh daerah itu sampai jam tiga, sebab matahari tidak bersinar. Dan tabir Bait Suci terbelah dua. Lalu Yesus berseru dengan suara nyaring: \"Ya Bapa, ke dalam tangan-Mu Kuserahkan nyawa-Ku.\" Dan sesudah berkata demikian Ia menyerahkan nyawa-Nya. Ketika kepala pasukan melihat apa yang terjadi, ia memuliakan Allah, katanya: \"Sungguh, orang ini adalah orang benar!\" Dan sesudah seluruh orang banyak, yang datang berkerumun di situ untuk tontonan itu, melihat apa yang terjadi itu, pulanglah mereka sambil memukul-mukul diri. Semua orang yang mengenal Yesus dari dekat, termasuk perempuan-perempuan yang mengikuti Dia dari Galilea, berdiri jauh-jauh dan melihat semuanya itu." },
  ]},
  glorious: { id: 'glorious', name: { id: 'Peristiwa Mulia', en: 'Glorious Mysteries' }, decades: [
      { id: 1, title: { id: "Yesus bangkit dari kematian", en: "The Resurrection" }, ref: "Luk 24:1-12", text: "Tetapi pagi-pagi benar pada hari pertama minggu itu mereka pergi ke kubur membawa rempah-rempah yang telah disediakan mereka. Mereka mendapati batu sudah terguling dari kubur itu, dan setelah masuk mereka tidak menemukan mayat Tuhan Yesus. Sementara mereka berdiri termangu-mangu karena hal itu, tiba-tiba ada dua orang berdiri dekat mereka memakai pakaian yang berkilau-kilauan. Mereka sangat ketakutan dan menundukkan kepala, tetapi kedua orang itu berkata kepada mereka: \"Mengapa kamu mencari Dia yang hidup, di antara orang mati? Ia tidak ada di sini, Ia telah bangkit. Ingatlah apa yang dikatakan-Nya kepada kamu, ketika Ia masih di Galilea, yaitu bahwa Anak Manusia harus diserahkan ke tangan orang-orang berdosa dan disalibkan, dan akan bangkit pada hari yang ketiga.\" Maka teringatlah mereka akan perkataan Yesus itu. Dan setelah mereka kembali dari kubur, mereka menceriterakan semuanya itu kepada kesebelas murid dan kepada semua saudara yang lain. Perempuan-perempuan itu ialah Maria dari Magdala, dan Yohana, dan Maria ibu Yakobus. Dan perempuan-perempuan lain juga yang bersama-sama dengan mereka memberitahukannya kepada rasul-rasul. Tetapi bagi mereka perkataan-perkataan itu seakan-akan omong kosong dan mereka tidak percaya kepada perempuan-perempuan itu. Sungguhpun demikian Petrus bangun, lalu cepat-cepat pergi ke kubur itu. Ketika ia menjenguk ke dalam, ia melihat hanya kain kapan saja. Lalu ia pergi, dan ia bertanya dalam hatinya apa yang kiranya telah terjadi." },
      { id: 2, title: { id: "Yesus naik ke surga", en: "The Ascension" }, ref: "Luk 24:50-53", text: "Lalu Yesus membawa mereka ke luar kota sampai dekat Betania. Di situ Ia mengangkat tangan-Nya dan memberkati mereka. Dan ketika Ia sedang memberkati mereka, Ia berpisah dari mereka dan terangkat ke sorga. Mereka sujud menyembah kepada-Nya, lalu mereka pulang ke Yerusalem dengan sangat bersukacita. Mereka senantiasa berada di dalam Bait Allah dan memuliakan Allah." },
      { id: 3, title: { id: "Roh Kudus turun atas para Rasul", en: "The Descent of the Holy Spirit" }, ref: "Kis 2:1-13", text: "Ketika tiba hari Pentakosta, semua orang percaya berkumpul di satu tempat. Tiba-tiba turunlah dari langit suatu bunyi seperti tiupan angin keras yang memenuhi seluruh rumah, di mana mereka duduk; dan tampaklah kepada mereka lidah-lidah seperti nyala api yang bertebaran dan hinggap pada mereka masing-masing. Maka penuhlah mereka dengan Roh Kudus, lalu mereka mulai berkata-kata dalam bahasa-bahasa lain, seperti yang diberikan oleh Roh itu kepada mereka untuk mengatakannya. Waktu itu di Yerusalem diam orang-orang Yahudi yang saleh dari segala bangsa di bawah kolong langit. Ketika turun bunyi itu, berkerumunlah orang banyak. Mereka bingung karena mereka masing-masing mendengar rasul-rasul itu berkata-kata dalam bahasa mereka sendiri. Mereka semua tercengang-cengang dan heran, lalu berkata: \"Bukankah mereka semua yang berkata-kata itu orang Galilea? Bagaimana mungkin kita masing-masing mendengar mereka berkata-kata dalam bahasa kita sendiri, yaitu bahasa yang kita pakai di negeri asal kita: kita orang Partia, Media, Elam, penduduk Mesopotamia, Yudea dan Kapadokia, Pontus dan Asia, Frigia dan Pamfilia, Mesir dan daerah-daerah Libia yang berdekatan dengan Kirene, pendatang-pendatang dari Roma, baik orang Yahudi maupun penganut agama Yahudi, orang Kreta dan orang Arab, kita mendengar mereka berkata-kata dalam bahasa kita sendiri tentang perbuatan-perbuatan besar yang dilakukan Allah.\" Mereka semuanya tercengang-cengang dan sangat termangu-mangu sambil berkata seorang kepada yang lain: \"Apakah artinya ini?\" Tetapi orang lain menyindir: \"Mereka sedang mabuk oleh anggur manis.\"" },
      { id: 4, title: { id: "Maria diangkat ke surga", en: "The Assumption" }, ref: "1Kor 15:23; DS 3903", text: "Tetapi tiap-tiap orang menurut urutannya: Kristus sebagai buah sulung; sesudah itu mereka yang menjadi milik-Nya pada waktu kedatangan-Nya." },
      { id: 5, title: { id: "Maria dimahkotai di surga", en: "The Coronation of Mary" }, ref: "Why 12:1, DS 3913-3917", text: "Maka tampaklah suatu tanda besar di langit: Seorang perempuan berselubungkan matahari, dengan bulan di bawah kakinya dan sebuah mahkota dari dua belas bintang di atas kepalanya." },
  ]}
};
