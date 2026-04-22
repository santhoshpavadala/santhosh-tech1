export const Footer = () => (
  <footer className="py-10 border-t border-foreground/5">
    <div className="container text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} <span className="gradient-text font-semibold">Your Name</span> · Crafted with React, Tailwind & ❤
      </p>
    </div>
  </footer>
);
