'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';

interface ProductProps {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    hoverImage?: string;
    colors?: string[];
}

export function ProductCard({ product }: { product: ProductProps }) {
    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <Link href={`/product/${product.id}`} className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {product.hoverImage && (
                    <Image
                        src={product.hoverImage}
                        alt={`${product.name} view 2`}
                        fill
                        className={styles.imageHover}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                )}

                <div className={styles.actionsOverlay}>
                    <button
                        className={styles.actionButton}
                        onClick={(e) => {
                            e.preventDefault();
                            // Add to cart logic here
                            console.log('Added to cart');
                        }}
                    >
                        Add to Cart
                    </button>
                    <button className={`${styles.actionButton} ${styles.secondaryAction}`}>
                        View Details
                    </button>
                </div>
            </div>

            <div className={styles.info}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.category}>{product.category}</p>

                <div className={styles.rating}>
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                    <span style={{ color: '#666', marginLeft: '4px' }}>({product.rating})</span>
                </div>

                <div className={styles.priceContainer}>
                    <span className={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                        <>
                            <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
                            <span className={styles.discount}>{discount}% OFF</span>
                        </>
                    )}
                </div>

                {product.colors && (
                    <div className={styles.colors}>
                        {product.colors.map((color, idx) => (
                            <span
                                key={idx}
                                className={styles.colorDot}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}
