import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Mode = 'explain' | 'quiz';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AppContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  subject: string;
  setSubject: (subject: string) => void;
  customSubject: string;
  setCustomSubject: (subject: string) => void;
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('explain');
  const [subject, setSubject] = useState('Matematika');
  const [customSubject, setCustomSubject] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load messages from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('chatMessages');
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const clearMessages = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
        subject,
        setSubject,
        customSubject,
        setCustomSubject,
        messages,
        addMessage,
        clearMessages,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
