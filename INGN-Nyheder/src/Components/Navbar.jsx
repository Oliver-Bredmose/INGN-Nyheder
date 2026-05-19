function Navbar({ categories, setActiveCategory }) {
  return (
    <nav>
      {categories.map((category) => (
    <button key={category} onClick={() => setActiveCategory(category)}>
      {category}
    </button>
  ))}
    </nav>
  )
}
export default Navbar