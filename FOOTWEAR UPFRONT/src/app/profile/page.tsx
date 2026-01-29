import { User, Package, MapPin, CreditCard, Settings } from 'lucide-react';
import styles from './profile.module.css';

export default function ProfilePage() {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.userInfo}>
                    <div className={styles.avatar}>VR</div>
                    <div className={styles.userDetails}>
                        <h3>Virat Runner</h3>
                        <p>virat@example.com</p>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <button className={`${styles.navItem} ${styles.active}`}>
                        <User size={20} /> Personal Details
                    </button>
                    <button className={styles.navItem}>
                        <Package size={20} /> Orders
                    </button>
                    <button className={styles.navItem}>
                        <MapPin size={20} /> Addresses
                    </button>
                    <button className={styles.navItem}>
                        <CreditCard size={20} /> Payment Methods
                    </button>
                    <button className={styles.navItem}>
                        <Settings size={20} /> Account Settings
                    </button>
                </nav>
            </div>

            <main className={styles.content}>
                <h1 className={styles.pageTitle}>Personal Details</h1>

                <div className={styles.card}>
                    <div className={styles.formGrid}>
                        <div className={styles.inputGroup}>
                            <label>First Name</label>
                            <input type="text" defaultValue="Virat" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Last Name</label>
                            <input type="text" defaultValue="Runner" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Email Address</label>
                            <input type="email" defaultValue="virat@example.com" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Phone Number</label>
                            <input type="tel" defaultValue="+91 98765 43210" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Date of Birth</label>
                            <input type="date" defaultValue="1995-05-15" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Gender</label>
                            <select defaultValue="Male">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    <button className={styles.saveBtn}>Save Changes</button>
                </div>
            </main>
        </div>
    );
}
