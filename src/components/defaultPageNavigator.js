'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ServiceContent() {
  const router = useRouter();

  useEffect(() => {
    router.push('/coming-soon');
  }, []);

  return null;
}
