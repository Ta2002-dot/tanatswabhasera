export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Tanatswa Bhasera. All rights reserved.</p>
      </div>
    </footer>
  );
}
