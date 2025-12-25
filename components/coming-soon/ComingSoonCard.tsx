interface ComingSoonCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ComingSoonCard({ children, className = '' }: ComingSoonCardProps) {
  return (
    <div className={`rounded-2xl p-8 shadow-2xl ${className}`}>
      {children}
    </div>
  );
}