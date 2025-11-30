export const moods = [
  { id: "stressed", name: "Stres", emoji: "😰" },
  { id: "anxious", name: "Cemas", emoji: "😟" },
  { id: "tired", name: "Lelah", emoji: "😴" },
  { id: "sad", name: "Sedih", emoji: "😢" },
  { id: "bored", name: "Bosan", emoji: "😑" },
  { id: "happy", name: "Bahagia", emoji: "😊" },
  { id: "overthinking", name: "Overthinking", emoji: "🤔" },
  { id: "low-appetite", name: "Tidak Lapar", emoji: "🍽️" },
  { id: "craving", name: "Mengidam", emoji: "🍫" },
]

export const moodDetails = {
  stressed: {
    explanation:
      "Saat stres, tubuh memproduksi kortisol yang memicu keinginan makan manis atau asin. Mari cari makanan yang dapat menenangkan sistem saraf Anda.",
    foods: [
      "🍌 Smoothie Pisang + Yogurt - Kaya kalium untuk menenangkan",
      "🥜 Almond Panggang - Protein dan magnesium alami",
      "☕ Teh Chamomile - Herbal menenangkan yang terbukti",
    ],
    ritual:
      "Tarik napas dalam selama 4 detik, tahan selama 4 detik, kemudian hembuskan selama 6 detik. Ulangi 5 kali. Ini membantu mengaktifkan sistem saraf parasimpatis Anda.",
    affirmation: "Aku tenang. Aku cukup. Aku bisa mengatasi ini dengan perlahan.",
  },
  anxious: {
    explanation:
      "Sistem saraf terlalu aktif dapat membuat sulit makan teratur. Pilih makanan yang mudah dicerna dan menenangkan.",
    foods: [
      "🫐 Buah Berry - Antioksidan alami untuk menenangkan pikiran",
      "🍞 Roti Gandum + Selai Kacang - Karbohidrat kompleks yang stabil",
      "🌿 Teh Mint - Menenangkan perut dan pikiran",
    ],
    ritual:
      "Letakkan tangan Anda di perut, rasakan napas masuk dan keluar. Napaskan perlahan selama 5 menit. Ini mengingatkan tubuh Anda bahwa Anda aman.",
    affirmation: "Tubuhku aman. Aku kembali ke pusat diriku. Segala sesuatu baik-baik saja sekarang.",
  },
  tired: {
    explanation:
      "Energi rendah sering membuat Anda menginginkan makanan manis cepat. Pilih makanan yang memberikan energi berkelanjutan.",
    foods: [
      "🍗 Kurma - Gula alami yang memberi energi instan",
      "🥚 Telur Rebus - Protein untuk energi jangka panjang",
      "💧 Air Lemon Hangat - Rehidrasi dan menyegarkan",
    ],
    ritual:
      "10 napas dalam sambil melakukan peregangan ringan. Angkat lengan ke atas, tekuk ke samping kiri dan kanan. Ini membangkitkan sirkulasi dan energi.",
    affirmation: "Aku mengisi ulang energiku dengan lembut dan cinta. Tubuhku layak mendapat istirahat.",
  },
  sad: {
    explanation: "Emosi turun membuat Anda butuh makanan hangat dan menenangkan. Nourish yourself dengan cinta.",
    foods: [
      "🍲 Sup Sayur Hangat - Makanan comforting yang menenangkan jiwa",
      "🍳 Telur Orak-arik - Protein mudah dicerna yang menghangatkan",
      "🥑 Alpukat - Lemak sehat untuk stabilitas emosi",
    ],
    ritual:
      "Letakkan tangan di dada, rasakan detak jantung Anda. Napaskan perlahan dan ingatkan diri Anda: Rasa ini adalah bagian dari menjadi manusia. Ini akan berlalu.",
    affirmation: "Rasaku valid. Aku merawat diriku dengan penuh kasih sayang. Aku layak untuk bahagia.",
  },
  bored: {
    explanation:
      "Kebosanan sering memicu makan tanpa sadar atau emotional eating. Mari pilih makanan yang menarik dan bermakna.",
    foods: [
      "🍊 Buah Potong Warna-warni - Stimulasi visual dan gizi",
      "🫘 Edamame - Snack interaktif yang menyenangkan",
      "🌾 Snack Renyah Tinggi Serat - Kepuasan tekstur yang sehat",
    ],
    ritual:
      "Minum segelas air, kemudian ambil jalan 1 menit dengan penuh kesadaran. Perhatikan apa yang Anda lihat, dengar, dan rasakan. Ini mengembalikan fokus Anda.",
    affirmation: "Aku memilih dengan sadar. Setiap pilihan saya mencerminkan cinta untuk diri saya sendiri.",
  },
  happy: {
    explanation: "Mood bagus adalah waktu yang sempurna untuk mencoba variasi makanan sehat yang membuat Anda bahagia.",
    foods: [
      "🌈 Buah Warna-warni - Rayakan kebahagiaan dengan warna cerah",
      "🥗 Salad Mini Segar - Ringan dan merayakan kesehatan",
      "💧 Infused Water - Segar dan menyegarkan",
    ],
    ritual:
      "3 napas penuh syukur. Dengan setiap napas, pikirkan hal yang Anda syukuri hari ini. Biarkan rasa terima kasih mengalir ke seluruh tubuh Anda.",
    affirmation: "Aku mensyukuri tubuh yang sehat ini. Aku merasakan kebahagiaan dengan setiap napas.",
  },
  overthinking: {
    explanation:
      "Otak lelah dari overthinking sering menginginkan karbohidrat cepat. Berikan diri Anda makanan yang menenangkan pikiran.",
    foods: [
      "🍫 Dark Chocolate 70% - Sedikit kebahagiaan untuk otak",
      "🥣 Oatmeal Mini - Karbohidrat kompleks yang menenangkan",
      "🍌 Pisang - Tryptophan alami untuk mood",
    ],
    ritual:
      "Grounding 5-4-3-2-1: Sebutkan 5 hal yang Anda lihat, 4 yang Anda sentuh, 3 yang Anda dengar, 2 yang Anda cium, 1 yang Anda rasakan. Ini membawa Anda kembali ke sekarang.",
    affirmation:
      "Aku boleh berhenti berpikir sebentar. Pikiran saya layak untuk istirahat. Aku hadir di sini, di saat ini.",
  },
  "low-appetite": {
    explanation:
      "Ketegangan emosi sering menekan nafsu makan Anda. Pilih makanan lembut dan mudah dicerna yang membangun energi kembali.",
    foods: [
      "🥣 Bubur Lembut - Mudah dicerna dan menenangkan",
      "🥚 Telur Rebus - Protein ringan yang bergizi",
      "🥤 Smoothie Buah - Nutrisi dalam bentuk yang mudah",
    ],
    ritual:
      "Makan satu gigitan dengan perhatian penuh. Rasakan tekstur, rasa, dan suhu. Ini membangun kembali hubungan Anda dengan makanan.",
    affirmation: "Tubuhku layak mendapat energi dan nutrisi. Setiap gigitan adalah tindakan cinta untuk diri saya.",
  },
  craving: {
    explanation:
      "Keinginan ≠ lapar. Biasanya dipicu oleh emosi atau kebiasaan. Mari cari alternatif yang memuaskan dan sehat.",
    foods: [
      "🥄 Greek Yogurt + Madu - Manis alami yang memuaskan",
      "🍿 Popcorn Tanpa Mentega - Asin dan renyah yang memuaskan",
      "🌶️ Sayur Rebus + Sambal Ringan - Pedas yang sehat",
    ],
    ritual:
      "Jeda 10 detik sebelum makan. Tanyakan pada diri sendiri: Apakah saya benar-benar lapar, atau saya mencari sesuatu yang lain? Ini membangun kesadaran diri.",
    affirmation:
      "Aku mengatur pilihanku dengan lembut. Saya bisa menikmati makanan tanpa penilaian diri. Saya mendengarkan tubuh saya dengan cinta.",
  },
}
