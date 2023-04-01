import styles from "./Sidebar.module.scss";
import samanthaImg from "../../assets/png/Ema.png";
import { Link, useLocation } from "react-router-dom";

const sidebarNavLinks = [
  "dashboard",
  "expenses",
  "wallets",
  "summary",
  "accounts",
  "settings",
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img style={{width:70, height:70, backgroundColor:'lightgrey', borderRadius:'50%'}} src={samanthaImg} alt="samantha" />
              <p className={styles.notifications}>4</p>
            </div>
            <p className={styles.userName}>Ema WatSon</p>
            <p className={styles.userEmail}>emawatson@email.com</p>
          </div>

          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${sidebarNavLink}`}
                  >
                    {sidebarNavLink.charAt(0).toUpperCase() +
                      sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}