"use client";
function Slide({ children, style,  ...props }: { children: React.ReactNode, style?: React.CSSProperties } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section 
      style={{
        ...style,
      }}
    {...props}>
      {children}
    </section>
  );
}

export default Slide;