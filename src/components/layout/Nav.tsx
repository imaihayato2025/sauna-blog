export default function Nav() {
  const navItems = [{ label: "Top" }, { label: "Blog" }];

  return (
    <nav className="flex">
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.label} className="text-2xl">
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
