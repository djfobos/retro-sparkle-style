import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "Italian Espresso Machine Pro",
      image: "https://images.unsplash.com/photo-1559629819-638a8f0a4303?w=400&h=300&fit=crop",
      oldPrice: "$899",
      newPrice: "$699",
      isOnSale: true
    },
    {
      id: 2,
      name: "Smart Refrigerator 4K",
      image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
      price: "$2,299"
    },
    {
      id: 3,
      name: "Premium Dishwasher",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop",
      oldPrice: "$1,499",
      newPrice: "$1,199",
      isOnSale: true
    },
    {
      id: 4,
      name: "Smart TV OLED 65\"",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
      price: "$1,899"
    },
    {
      id: 5,
      name: "Induction Cooktop",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      price: "$799"
    },
    {
      id: 6,
      name: "Wine Cooler Deluxe",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      oldPrice: "$999",
      newPrice: "$749",
      isOnSale: true
    }
  ];

  const itemsPerView = 4;
  const maxSlide = Math.ceil(products.length / itemsPerView) - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Newly Added</h2>
            <p className="text-xl text-muted-foreground">
              Latest arrivals in our premium collection
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="w-10 h-10 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="w-10 h-10 p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
              width: `${(products.length / itemsPerView) * 100}%`
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="product-card mx-2 flex-shrink-0"
                style={{ width: `${100 / products.length}%` }}
              >
                <div className="aspect-[4/3] bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-3 text-lg leading-tight">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2">
                    {product.isOnSale ? (
                      <>
                        <span className="price-old">{product.oldPrice}</span>
                        <span className="price-new">{product.newPrice}</span>
                      </>
                    ) : (
                      <span className="text-foreground font-bold text-lg">
                        {product.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;