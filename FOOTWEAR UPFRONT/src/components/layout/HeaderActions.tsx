'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import styles from './Header.module.css';

export function HeaderActions() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { isLoggedIn, login, logout } = useAuth();

    return (
        <div className={styles.actions}>
            <div className={styles.searchContainer}>
                <button className={styles.iconBtn} aria-label="Search">
                    <Search size={22} strokeWidth={1.5} />
                </button>
            </div>

            <div className={styles.profileContainer}>
                <button
                    className={styles.iconBtn}
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    aria-label="Profile"
                >
                    <User size={22} strokeWidth={1.5} />
                </button>

                {isProfileOpen && (
                    <div className={styles.dropdown} onMouseLeave={() => setIsProfileOpen(false)}>
                        {isLoggedIn ? (
                            <>
                                <Link href="/profile" className={styles.dropdownItem} onClick={() => setIsProfileOpen(false)}>My Profile</Link>
                                <Link href="/orders" className={styles.dropdownItem} onClick={() => setIsProfileOpen(false)}>Orders</Link>
                                <Link href="/wishlist" className={styles.dropdownItem} onClick={() => setIsProfileOpen(false)}>Wishlist</Link>
                                <div className={styles.divider} />
                                <button
                                    className={`${styles.dropdownItem} ${styles.logout}`}
                                    onClick={() => {
                                        logout();
                                        setIsProfileOpen(false);
                                    }}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className={styles.dropdownItem} onClick={() => setIsProfileOpen(false)}>Login</Link>
                                <Link href="/login" className={styles.dropdownItem} onClick={() => setIsProfileOpen(false)}>Register</Link>
                                <div className={styles.divider} />
                                <button
                                    className={styles.dropdownItem}
                                    onClick={() => {
                                        login();
                                        setIsProfileOpen(false);
                                    }}
                                >
                                    Demo Login
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>

            <Link href="/wishlist" className={styles.iconBtn} aria-label="Wishlist">
                <Heart size={22} strokeWidth={1.5} />
            </Link>

            <Link href="/cart" className={styles.cartBtn} aria-label="Cart">
                <ShoppingBag size={22} strokeWidth={1.5} />
                <span className={styles.cartCount}>0</span>
            </Link>
        </div>
    );
}
