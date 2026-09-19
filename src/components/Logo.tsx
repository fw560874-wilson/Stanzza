export function Logo({ className = "logo-mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M20 22c0-6.6 5.4-12 12-12s12 5.4 12 12c0 4.4-2.4 8.2-6 10.3 3.6 2.1 6 5.9 6 10.3 0 6.6-5.4 12-12 12s-12-5.4-12-12c0-4.4 2.4-8.2 6-10.3-3.6-2.1-6-5.9-6-10.3Z"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path
        d="M32 20c4.4 0 8 3 8 6.8S36.4 33.6 32 33.6 24 30.6 24 26.8 27.6 20 32 20Zm0 13.6c4.4 0 8 3 8 6.8S36.4 47.2 32 47.2 24 44.2 24 40.4s3.6-6.8 8-6.8Z"
        stroke="currentColor"
        strokeWidth="3.4"
      />
    </svg>
  );
}
