export default function Footer() {
  return (
    <footer className="border-t bg-white/80 backdrop-blur">
      <div className="container mx-auto py-8 text-center text-sm text-slate-600">
        <p>&copy; {new Date().getFullYear()} Tanatswa Bhasera. All rights reserved.</p>
      </div>
    </footer>
  );
}
