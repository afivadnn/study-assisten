import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useApp } from '@/context/AppContext';
import { SUBJECTS } from '@/lib/prompts';

export function SubjectSelector() {
  const { subject, setSubject, customSubject, setCustomSubject } = useApp();

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Mata Kuliah</label>
      <Select value={subject} onValueChange={setSubject}>
        <SelectTrigger>
          <SelectValue placeholder="Pilih mata kuliah" />
        </SelectTrigger>
        <SelectContent>
          {SUBJECTS.map((sub) => (
            <SelectItem key={sub} value={sub}>
              {sub}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {subject === 'Other' && (
        <Input
          placeholder="Masukkan nama mata kuliah"
          value={customSubject}
          onChange={(e) => setCustomSubject(e.target.value)}
          className="mt-2"
        />
      )}
    </div>
  );
}
