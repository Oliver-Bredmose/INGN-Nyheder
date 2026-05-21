import styles from "./Navbar.module.scss"
import userIcon from "../../assets/images/icon_User_.png"
import barsIcon from "../../src/assets/images/"

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
        <img src={userIcon} alt="bruger"/>
        <img src={barsIcon} alt="menu"/>
      </div>
    </nav>
  )
}

export default Navbar