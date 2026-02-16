export default function Pill({ children }: { children: React.ReactNode }) {
    return (
      <span className="rounded-full border px-3 py-1 text-sm text-neutral-700">
        {children}
      </span>
    );
  }