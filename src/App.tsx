import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from './context/AppContext';
import { LandingPage } from './components/LandingPage';
import { ChatPage } from './pages/ChatPage';
import { useApp } from './context/AppContext';

const queryClient = new QueryClient();

function AppContent() {
  const { mode } = useApp();
  
  // If mode is set, show chat page, otherwise show landing
  if (mode) {
    return <ChatPage />;
  }
  
  return <LandingPage />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
