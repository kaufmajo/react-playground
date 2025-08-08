export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
      {children}
    </div>
  );
}
