"use client";

import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";

// Mock Data
const products = [
    {
        id: 1,
        name: "Robot Builder Kit",
        price: 2499,
        rating: 4.8,
        reviews: 124,
        image: "/robot-kit.png",
        age: "8+",
        badge: "Hot Seller",
    },
    {
        id: 2,
        name: "Wooden Activity Cube",
        price: 3999,
        rating: 4.9,
        reviews: 89,
        image: "/wooden-cube.png",
        age: "1-3",
        badge: "Best Value",
    },
    {
        id: 3,
        name: "Plush Dino Friend",
        price: 1499,
        rating: 4.7,
        reviews: 256,
        image: "/plush-dino.png",
        age: "0+",
        badge: null,
    },
    {
        id: 4,
        name: "Space Explorer Set",
        price: 4999,
        rating: 5.0,
        reviews: 42,
        image: "/space-set.png",
        age: "5+",
        badge: "New",
    },
];

export default function TrendingToys() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-2">
                            Trending Toys
                        </h2>
                        <p className="text-gray-500">What everyone is playing with right now!</p>
                    </div>
                    <Link
                        href="/category/trending"
                        className="hidden md:block text-primary font-bold hover:underline"
                    >
                        View All →
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 relative flex flex-col cursor-pointer"
                        >
                            {/* Image Area */}
                            <div className="relative aspect-square rounded-t-2xl overflow-hidden bg-gray-50">
                                {product.badge && (
                                    <span className="absolute top-3 left-3 bg-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                                        {product.badge}
                                    </span>
                                )}
                                <div className="absolute inset-0 bg-white">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                {/* Hover Actions */}
                                <div className="absolute right-3 top-3 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="text-xs text-gray-400 font-medium mb-1">Age {product.age} Years</div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href={`/product/${product.id}`}>{product.name}</Link>
                                </h3>

                                <div className="flex items-center mb-4">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
                                    <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                                </div>

                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                                    <button className="p-2.5 bg-gray-900 text-white rounded-xl hover:bg-primary transition-colors flex items-center justify-center">
                                        <ShoppingCart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/category/trending"
                        className="text-primary font-bold hover:underline"
                    >
                        View All Trending Toys →
                    </Link>
                </div>
            </div>
        </section>
    );
}
