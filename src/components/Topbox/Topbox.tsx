import "./Topbox.scss"
import { topDealUsers } from "../../data";

const Topbox = () => {
  return (
    <div className="topBox">
      <h1 className="mb-5">top deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div
            className="listUser flex justify-between items-center mb-5"
            key={user.id}
          >
            <div className="user flex items-center gap-5">
              <img src={user.img} alt="" />
              <div className="userText flex flex-col gap-1">
                <div className="username text-sm font-medium">
                  {user.username}
                </div>
                <div className="useremail text-xs">{user.email}</div>
              </div>
            </div>
            <div className="amount font-medium">{user.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbox;
