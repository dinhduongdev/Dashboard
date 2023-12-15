import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="items flex flex-col mb-2" key={item.id}>
          <span className="title text-[12px] font-extralight ">
            {item.title}
          </span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url } className="listItem p-3" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <div className="listItemTitle">{listItem.title}</div>
            </Link>
          ))}
          {/* <Link to="/" className="listItem p-3">
            <img src="profile.svg" alt="" />
            <div className="listItemTitle">profile</div>
          </Link> */}
        </div>
      ))}
      {/* <div className="items flex flex-col mb-2">
        <span className="title text-[12px] font-extralight ">main</span>
        <Link to="/" className="listItem p-3">
          <img src="home.svg" alt="" />
          <div className="listItemTitle">home</div>
        </Link>
        <Link to="/" className="listItem p-3">
          <img src="profile.svg" alt="" />
          <div className="listItemTitle">profile</div>
        </Link>
      </div> */}
    </div>
  );
};

export default Menu;
