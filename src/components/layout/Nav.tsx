export default function Nav() {
  const navItems = [{ label: "Top" }, { label: "Blog" }];

  return (
    <nav>
      <ul className="flex"></ul>
      {navItems.map((item) => (
        <li key={item.label}>{item.label}</li>
      ))}
    </nav>
  );
}
