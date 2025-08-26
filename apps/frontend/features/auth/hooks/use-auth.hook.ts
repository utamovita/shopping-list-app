'use client';

import { useAuthStore } from '@/store/auth.store';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { loginSchema, registerSchema } from '../schemas/auth.schema';

type AuthType = 'login' | 'register';
type FormSchema = z.infer<typeof loginSchema | typeof registerSchema>;

export function useAuth(type: AuthType) {
  const setToken = useAuthStore((state) => state.setToken);
  const router = useRouter();
  const isLogin = type === 'login';

  const mutation = useMutation({
    mutationFn: (values: FormSchema) => {
      const url = isLogin
        ? 'http://localhost:3000/auth/login'
        : 'http://localhost:3000/auth/register';
      return axios.post(url, values);
    },
    onSuccess: (response) => {
      if (response.data.access_token) {
        setToken(response.data.access_token);
        router.push('/');
      } else {
        router.push('/login');
      }
    },
    onError: (error) => {
      console.error('Authentication error:', error);
    },
  });

  return {
    isPending: mutation.isPending,
    mutate: mutation.mutate,
  };
}