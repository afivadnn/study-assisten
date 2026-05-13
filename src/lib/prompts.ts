export const SUBJECTS = [
  'Matematika',
  'Fisika',
  'Kimia',
  'Biologi',
  'Bahasa Indonesia',
  'Bahasa Inggris',
  'Sejarah',
  'Geografi',
  'Ekonomi',
  'Sosiologi',
  'Other',
] as const;

export const MODES = [
  { value: 'explain', label: 'Explain', description: 'Jelaskan konsep dengan detail' },
  { value: 'quiz', label: 'Quiz', description: 'Latihan dengan soal pilihan ganda' },
] as const;
