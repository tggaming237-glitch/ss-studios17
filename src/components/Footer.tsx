export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="font-display text-sm font-bold tracking-tighter text-muted-foreground">
          SS THUMBNAIL STUDIO
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SS Thumbnail Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
