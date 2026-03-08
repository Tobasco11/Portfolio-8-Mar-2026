"use client";

export const Page = ({ children }: { children: React.ReactNode }) => {
  return <main className="pageEnter">{children}</main>;
};

export const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <div className="revealEnter" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

export const Hover = ({ children }: { children: React.ReactNode }) => {
  return <div className="hoverLift">{children}</div>;
};

export const Stagger = ({ children }: { children: React.ReactNode }) => {
  return <div className="staggerWrap">{children}</div>;
};

export const StaggerItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="staggerItem">{children}</div>;
};