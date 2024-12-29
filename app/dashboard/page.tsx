import { cookies } from 'next/headers';

export default async function Page() {
  const cookie = (await cookies()).get('pb_auth');

  // Never happens due to middleware.ts
  if (!cookie) throw new Error('Not logged in');

  const { model } = JSON.parse(cookie.value);

  return (
    <span>
      Logged in as <b>{model.email}</b>
    </span>
  );
}
