type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

// Small uppercase label preceded by a line, colored with the current text color.
const Eyebrow = ({ children, className = '' }: EyebrowProps) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <span className="block h-0.5 w-7 bg-current" />
    <span className="text-[13px] font-semibold tracking-[.22em] uppercase">{children}</span>
  </div>
);

export default Eyebrow;
