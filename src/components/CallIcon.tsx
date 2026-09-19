export function CallIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M11.2 12.4c1.1 2.4 2.9 4.3 5.3 5.4l1.6-1.6c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3.1.6.5 0 .9.4.9.9V21c0 .5-.4.9-.9.9C14.8 21.9 9 16.1 9 8.9c0-.5.4-.9.9-.9H14c.5 0 .9.4.9.9 0 1.1.2 2.1.6 3.1.1.4 0 .9-.3 1.2l-1.6 1.6-.4-.4Z"
        fill="currentColor"
      />
    </svg>
  );
}
