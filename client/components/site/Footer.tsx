export default function Footer() {
  return (
    <footer className="border-t bg-slate-950/60 backdrop-blur">
      <div className="container mx-auto py-8 text-center text-sm text-slate-300">
        <p>&copy; {new Date().getFullYear()} Tanatswa Bhasera. All rights reserved.</p>
      </div>
    </footer>
  );
}
