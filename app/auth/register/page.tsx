import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { register } from '@/lib/pocketbase/actions';

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <form action={register} className="flex w-[400px] flex-col gap-2">
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <Input name="password" type="password" id="password" />
        <Button type="submit" className="mt-2">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
