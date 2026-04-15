import type { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <header>
        <h1>Admin Console</h1>
      </header>
      <div>{children}</div>
    </section>
  );
}
