import { 
  Refrigerator, 
  Monitor, 
  ChefHat, 
  Smartphone 
} from "lucide-react";

const CategoryShowcase = () => {
  const categories = [
    {
      name: "Home Appliances",
      icon: Refrigerator,
      description: "Kitchen & Laundry"
    },
    {
      name: "Electronics",
      icon: Monitor,
      description: "TVs & Computers"
    },
    {
      name: "Kitchen",
      icon: ChefHat,
      description: "Cooking Equipment"
    },
    {
      name: "Mobile",
      icon: Smartphone,
      description: "Phones & Tablets"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Categories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection of premium appliances and electronics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.name} className="category-card text-center cursor-pointer group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;