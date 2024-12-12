import { menuTitle, tabs, menuTab } from "./menu.module.scss";
import NavigationTab from "../navigation-tab/navigation-tab.jsx";

const Menu = ({ menu }) => {
  return (
    <div>
      <h3 className={menuTitle}>Меню</h3>
      <div className={tabs}>
        {menu.map(({ id, name }) => (
          <NavigationTab
            key={id}
            path={`/dish/${id}`}
            title={name}
            styleClass={menuTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
