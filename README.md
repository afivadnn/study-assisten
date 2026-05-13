# AI-Powered Study Assistant

A web-based AI study assistant with chat interface, supporting Explain and Quiz modes for various subjects using OpenAI GPT-4o-mini.

## Features

- **Landing Page**: Hero section with feature cards and "How it works" guide
- **Chat Interface**: Real-time conversation with AI tutor
- **Subject Selection**: Dropdown with predefined subjects (Matematika, Fisika, Kimia, etc.) + custom option
- **Explain Mode**: AI explains concepts step-by-step with examples
- **Quiz Mode**: Multiple choice questions with immediate feedback
- **Conversation History**: Persisted in LocalStorage during session
- **Markdown Support**: Rich text rendering for educational content
- **Responsive Design**: Works on desktop and mobile

## Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: React Context (global) + React Query (API)
- **Backend**: Vercel serverless functions (API proxy)
- **AI**: OpenAI GPT-4o-mini
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Add your OpenAI API key to `.env`:
```
OPENAI_API_KEY=your_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

6. Open http://localhost:5173 in your browser

## Deployment to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy

The API proxy at `/api/chat` will be automatically deployed as a Vercel serverless function.

## Project Structure

```
/src
  /components
    /ui (shadcn components)
    ChatInterface.tsx
    LandingPage.tsx
    SubjectSelector.tsx
    ModeSelector.tsx
  /context
    AppContext.tsx
  /hooks
    useChat.ts
  /lib
    prompts.ts
    utils.ts
  /pages
    ChatPage.tsx
/api
  chat.ts (serverless function)
```

## License

MIT
