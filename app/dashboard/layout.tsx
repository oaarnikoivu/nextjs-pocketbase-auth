import { Button } from '@/components/ui/button';
import { logout } from '@/lib/pocketbase/actions';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex w-full items-center justify-between border-b p-4">
        <span>Acme.</span>
        <Button onClick={logout}>Logout</Button>
      </header>
      <main className="container mx-auto py-12">{children}</main>
    </>
  );
}
