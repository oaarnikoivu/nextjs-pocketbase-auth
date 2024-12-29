import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { login } from '@/lib/pocketbase/actions';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <form action={login} className="flex w-[400px] flex-col gap-2">
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <Input name="password" type="password" id="password" />
        <Button type="submit" className="mt-2">
          Login
        </Button>
        <Link href="/auth/register" className="mt-4 text-xs underline">
          Don&apos;t have an account? Click here to get started.
        </Link>
      </form>
    </div>
  );
}
