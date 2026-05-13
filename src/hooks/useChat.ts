import { useMutation } from '@tanstack/react-query';
import { useApp } from '@/context/AppContext';

interface ChatResponse {
  response: string;
}

export function useChat() {
  const { messages, mode, subject, customSubject, addMessage, setIsLoading } = useApp();

  const chatMutation = useMutation({
    mutationFn: async (): Promise<ChatResponse> => {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages,
          mode,
          subject,
          customSubject,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      return response.json();
    },
    onSuccess: (data) => {
      addMessage({ role: 'assistant', content: data.response });
    },
    onError: (error) => {
      console.error('Chat error:', error);
      addMessage({ role: 'assistant', content: 'Maaf, terjadi kesalahan. Silakan coba lagi.' });
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const sendMessage = (userMessage: string) => {
    addMessage({ role: 'user', content: userMessage });
    setIsLoading(true);
    chatMutation.mutate();
  };

  return {
    sendMessage,
    isLoading: chatMutation.isPending,
    error: chatMutation.error,
  };
}
