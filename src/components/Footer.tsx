"use client";

export function Footer() {
  return (
    <footer className="w-full h-12 flex items-center justify-center border-t bg-card text-card-foreground px-4 md:px-6 text-xs fixed bottom-0 left-0 z-30">
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/vrindustries"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          VR Industries
        </a>
        <span className="mx-2">|</span>
        <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
}
