'use server';

import { cookies } from 'next/headers';
import { pbClient } from '.';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { token, record: model } = await pbClient
    .collection('users')
    .authWithPassword(email, password);

  const cookie = JSON.stringify({ token, model });

  (await cookies()).set('pb_auth', cookie, {
    secure: true,
    path: '/',
    sameSite: 'strict',
    httpOnly: true,
  });

  redirect('/dashboard');
}

export async function register(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  formData.append('passwordConfirm', password);

  await pbClient.collection('users').create(formData);
  const { token, record: model } = await pbClient
    .collection('users')
    .authWithPassword(email, password);

  const cookie = JSON.stringify({ token, model });

  (await cookies()).set('pb_auth', cookie, {
    secure: true,
    path: '/',
    sameSite: 'strict',
    httpOnly: true,
  });

  redirect('/dashboard');
}

export async function logout() {
  (await cookies()).delete('pb_auth');
  redirect('/auth/login');
}
