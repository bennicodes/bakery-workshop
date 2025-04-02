import styles from "./MenuItem.module.css";

const MenuItem = ({ item, cartContent, setCartContent }) => {
  console.log(item);

  return (
    <div className={styles.menuItem}>
      <img src={item.imageUrl} />

      <button>Add to cart</button>
    </div>
  );
};

export default MenuItem;
