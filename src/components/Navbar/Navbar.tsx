
const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-5">
      <div className="logo flex items-center">
        <img src="logo.svg" alt="" />
        <span>manager products</span>
      </div>
      <div className="links flex items-center gap-5">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification relative">
          <img src="notifications.svg" alt="" />
          <span className="w-4 h-4 bg-red-500 rounded-full flex justify-center items-center absolute top-[-10px] right-[-10px]">
            1
          </span>
        </div>
        <div className="user">
          <img
            src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/299386026_1253903288679699_8017001712688903949_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=LKMTSd7FaPsAX9Gm7FM&_nc_ht=scontent.fsgn5-11.fna&cb_e2o_trans=t&oh=00_AfAmVXyqQN7sizT_i3nAvCZeub--805jAihFcU5dtyKLAg&oe=657F317C"
            alt=""
            className="w-7 h-7 rounded-full object-cover"
          />
        </div>
        <img src="setting.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
