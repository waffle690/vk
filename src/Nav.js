import './Nav.css';

function Nav() {
  let fotoProfile = <img className="fotoProfile" src="https://s1.1zoom.ru/big3/631/Bodybuilding_Men_Negroid_Pose_Shorts_Human_back_587746_5184x3456.jpg"></img>,
      obj = { logo: <img className="logo" src="https://office-guru.ru/wp-content/uploads/2021/10/725ab98c7e8200d98a0adfa5fdbe3e84.jpg" alt="логотип"></img>,search: <input type="search"></input>, bell: <img className="bell" src="https://free-png.ru/wp-content/uploads/2020/07/notification-yuo-tube.png" alt="колокол"></img>, profile: fotoProfile}
    return (
      <nav>
        <ul className="ul_nav">
         <li className="li_nav"><a href="#" className="a_nav">{obj.logo}</a></li>
          <li className="li_nav"><a href="#" className="a_nav" style={{'display': ['flex']}}>{obj.search}</a></li>
          <li className="li_nav"><a href="#" className="a_nav">{obj.bell}</a></li>
          <li className="li_nav"><a href="#" className="a_nav">{obj.profile}</a></li>  
        </ul>
      </nav>
    );
  }
  
export default Nav;
  