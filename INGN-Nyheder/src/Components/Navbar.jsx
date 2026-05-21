import styles from "./Navbar.module.scss"

function Navbar({ categories, setActiveCategory }) {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>INGN</span>
      <div className={styles.categories}>
        {categories.map((category) => (
          <button key={category} onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className={styles.icons}>
        <img src="/src/assets/images/icon_User_.png" alt="bruger"/>
        <img src="/src/assets/images/icon_Bars_.png" alt="menu"/>
      </div>
    </nav>
  )
}

export default Navbar