import { Button } from '@/components/ui/button';
import { useApp } from '@/context/AppContext';
import { MODES } from '@/lib/prompts';

export function ModeSelector() {
  const { mode, setMode } = useApp();

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Mode</label>
      <div className="grid grid-cols-2 gap-2">
        {MODES.map((m) => (
          <Button
            key={m.value}
            variant={mode === m.value ? 'default' : 'outline'}
            onClick={() => setMode(m.value as any)}
            className="h-auto flex-col items-start p-4"
          >
            <span className="font-semibold">{m.label}</span>
            <span className="text-xs opacity-70">{m.description}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
