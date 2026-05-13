import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, FileText } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function LandingPage() {
  const { setMode } = useApp();

  const handleStart = () => {
    setMode('explain');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            AI-Powered Study Assistant
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Belajar lebih efektif dengan bantuan AI tutor cerdas. Pilih mata kuliah, pilih mode belajar, dan mulai percakapan!
          </p>
          <Button size="lg" onClick={handleStart} className="text-lg px-8">
            Start Learning
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <BookOpen className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Explain Mode</CardTitle>
              <CardDescription>
                Jelaskan konsep dengan detail dan contoh yang mudah dipahami
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Brain className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Quiz Mode</CardTitle>
              <CardDescription>
                Latihan dengan soal pilihan ganda dan dapatkan feedback instan
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="opacity-60">
            <CardHeader>
              <FileText className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Summary Mode</CardTitle>
              <CardDescription>
                Ringkas materi pelajaran dengan cepat (Coming Soon)
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* How It Works */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold">Pilih Mata Kuliah</h3>
              <p className="text-muted-foreground">Pilih subjek yang ingin Anda pelajari</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold">Pilih Mode</h3>
              <p className="text-muted-foreground">Explain untuk belajar, Quiz untuk latihan</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold">Mulai Chat</h3>
              <p className="text-muted-foreground">Mulai percakapan dengan AI tutor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
