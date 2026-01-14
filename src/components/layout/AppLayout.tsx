import type { ReactNode } from "react";

function LayoutSidebar({ children }: { children: ReactNode }) {
  return (
    <aside className="w-[240px] shrink-0 flex flex-col border-r border-black-alpha-8 p-2 gap-2">
      {children}
    </aside>
  );
}

function LayoutMain({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col flex-1 h-full overflow-hidden">
      {children}
    </main>
  );
}

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-row overflow-hidden text-sm">
      {children}
    </div>
  );
}

AppLayout.Sidebar = LayoutSidebar;
AppLayout.Main = LayoutMain;

export { AppLayout };
