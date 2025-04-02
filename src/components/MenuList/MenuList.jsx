import bakeryItems from "../../assets/data";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuList.module.css";

const MenuList = ({ cartContent, setCartContent }) => {
  console.log(bakeryItems);

  return (
    <>
      <h1 className={styles.dessertHeader}>High Carb Heaven</h1>
      <div className={styles.menuList}>
        {bakeryItems.map((item, index) => {
          return (
            <MenuItem
              key={item.id}
              item={item}
              cartContent={cartContent}
              setCartContent={setCartContent}
            />
          );
        })}
      </div>
    </>
  );
};
export default MenuList;
