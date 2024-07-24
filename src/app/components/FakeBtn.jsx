'use client';
import { email } from '../utils/config';

export default function FakeBtn({ text }) {
  return (
    <a 
    className=" no-count" 
    href={`mailto:${email}`} >
      { text }
    </a>
  );
}