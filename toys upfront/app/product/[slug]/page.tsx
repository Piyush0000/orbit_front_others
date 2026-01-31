"use client";

import { useState } from "react";
import { Star, ShieldCheck, Heart, Share2, Truck, RefreshCcw, Package } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductPage() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("desc");

    // Mock Data
    const images = [
        "/api/placeholder/600/600",
        "/api/placeholder/600/600",
        "/api/placeholder/600/600",
        "/api/placeholder/600/600",
    ];

    const product = {
        id: "1",
        name: "Smart Robot Builder Kit",
        price: 2499,
        originalPrice: 2999,
        rating: 4.8,
        reviews: 124,
        description: "Let your child's imagination run wild with this Smart Robot Builder Kit!",
        age: "8+"
    };


    return (
        <div className="bg-white pb-20">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4 text-sm text-gray-500">
                <span>Home</span> / <span>Educational</span> / <span className="text-gray-900 font-medium">Smart Robot Builder Kit</span>
            </div>

            <div className="container mx-auto px-4 mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="flex flex-col gap-4">
                        <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={images[selectedImage]} alt="Product" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                                Best Seller
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx ? "border-primary" : "border-transparent hover:border-gray-200"
                                        }`}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                                Ages 8+
                            </span>
                            <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                                <Package className="w-4 h-4" /> In Stock
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                            Smart Robot Builder Kit
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center text-yellow-400">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current text-gray-300" />
                            </div>
                            <span className="text-sm text-gray-500 underline">124 Reviews</span>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4 mb-8">
                            <div className="flex items-baseline gap-3 mb-6">
                                <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                                )}
                                <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">
                                    In Stock
                                </span>
                            </div>              <p className="text-sm text-gray-500">Includes all taxes. Free shipping on this item.</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex gap-4">
                                <div className="flex items-center border border-gray-200 rounded-full">
                                    <button
                                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-l-full transition-colors"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        -
                                    </button>
                                    <span className="w-10 text-center font-bold text-gray-900">{quantity}</span>
                                    <button
                                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-r-full transition-colors"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button className="flex-1 bg-primary text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-primary/30 active:scale-95">
                                    Add to Cart
                                </button>
                                <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 text-gray-600 hover:text-red-500 transition-colors">
                                    <Heart className="w-6 h-6" />
                                </button>
                            </div>
                            <button className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-full hover:bg-gray-800 transition-colors">
                                Buy Now
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-green-500" />
                                <span className="text-sm font-medium text-gray-700">Safety Certified</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
                                <Truck className="w-6 h-6 text-blue-500" />
                                <span className="text-sm font-medium text-gray-700">Fast Delivery</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
                                <RefreshCcw className="w-6 h-6 text-orange-500" />
                                <span className="text-sm font-medium text-gray-700">Easy Returns</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-purple-500" />
                                <span className="text-sm font-medium text-gray-700">Non-Toxic</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <h4 className="font-bold text-gray-900 mb-2">Description</h4>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {product.description}
                                Perfect for introducing STEM concepts, this kit includes 150+ pieces that can be
                                assembled into 5 different robot models.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                <li>Enhances problem-solving skills</li>
                                <li>Promotes hand-eye coordination</li>
                                <li>Made from high-quality, BPA-free plastic</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Similar Products */}
                <div className="mt-24">
                    <h2 className="text-2xl font-bold font-display text-gray-900 mb-8">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Reusing mock product card structure for simplicity */}
                        {[1, 2, 3, 4].map(i => (
                            <ProductCard key={i} product={{
                                id: i,
                                name: `Related Toy ${i}`,
                                price: 29.99,
                                rating: 4.5,
                                reviews: 45,
                                age: "5+",
                                image: "/api/placeholder/400/400"
                            }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
