export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] h-[100dvh] p-4 font-[family-name:var(--font-poppins)] flex flex-col justify-end">
      <div className="h-[75%] flex flex-col items-center justify-between">
        {children}
      </div>
    </div>
  );
}
