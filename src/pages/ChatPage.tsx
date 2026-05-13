import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChatInterface } from '@/components/ChatInterface';
import { SubjectSelector } from '@/components/SubjectSelector';
import { ModeSelector } from '@/components/ModeSelector';
import { useApp } from '@/context/AppContext';
import { ArrowLeft, Settings } from 'lucide-react';

export function ChatPage() {
  const { clearMessages } = useApp();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => window.location.href = '/'}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">AI Study Assistant</h1>
            <Button variant="ghost" size="icon" onClick={() => setShowSettings(!showSettings)}>
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="border-b bg-muted p-4">
          <div className="container mx-auto max-w-2xl space-y-4">
            <SubjectSelector />
            <ModeSelector />
            <Button variant="destructive" onClick={clearMessages} className="w-full">
              Clear Conversation History
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-4xl h-[calc(100vh-73px)]">
        <ChatInterface />
      </div>
    </div>
  );
}
