import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { searchKraftverkByName, type NVEKraftverk } from "@/lib/nve";
import { Loader2, MapPin, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  value: string;
  kommuneHint?: string;
  onChange: (value: string) => void;
  onSelect: (kraftverk: NVEKraftverk) => void;
}

export const SearchKraftverkCombobox = ({ value, kommuneHint, onChange, onSelect }: Props) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<NVEKraftverk[]>([]);

  useEffect(() => setQuery(value), [value]);

  // debounce search
  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setResults([]);
      return;
    }
    setLoading(true);
    const t = setTimeout(async () => {
      try {
        const r = await searchKraftverkByName(query, kommuneHint);
        setResults(r);
      } finally {
        setLoading(false);
      }
    }, 300);
    return () => clearTimeout(t);
  }, [query, kommuneHint]);

  useEffect(() => {
    setOpen((results.length > 0 || loading) && query.trim().length >= 2);
  }, [results, loading, query]);

  const items = useMemo(() => results.slice(0, 10), [results]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
      </div>
      <Input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange(e.target.value);
        }}
        onFocus={() => setOpen(true)}
        placeholder={t('sellForm.plantSearchPlaceholder')}
        className="bg-background pr-10 focus-visible:ring-2"
        aria-autocomplete="list"
        role="combobox"
        aria-expanded={open}
        aria-controls="kraftverk-results"
      />

      {open && (items.length > 0 || loading) && (
        <div
          id="kraftverk-results"
          className="absolute left-0 right-0 mt-1 max-h-72 overflow-auto rounded-md border bg-background shadow-xl z-50"
        >
          {items.length === 0 && (
            <div className="px-3 py-2 text-sm text-muted-foreground">{t('sellForm.noResults')}</div>
          )}
          {items.map((k) => (
            <button
              key={k.VannKraftverkID}
              type="button"
              className="w-full text-left px-3 py-2 hover:bg-accent focus:bg-accent/70 transition-colors"
              onClick={() => {
                onSelect(k);
                onChange(k.Navn);
                setQuery(k.Navn);
                setOpen(false);
              }}
            >
              <div className="font-medium">{k.Navn}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {k.Kommune}, {k.Fylke} • {k.MaksYtelse} MW • {k.MidProd_91_20} GWh/år
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
