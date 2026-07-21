import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { brandsData, Brand } from "../data/brands";

function BrandSkeleton() {
  return (
    <div className="relative bg-gray-50 rounded-xl p-8 pt-12 shadow-sm border border-gray-100">
      <div className="absolute -top-12 left-8 w-32 h-32 bg-gray-200 rounded-full border-[3px] border-white animate-pulse" />
      
      <div className="ml-[120px] sm:ml-[140px] mb-6">
        <div className="h-8 bg-gray-200 rounded w-2/3 animate-pulse" />
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-200 mt-2 mr-3 shrink-0 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        </div>
        <div className="flex items-start">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-200 mt-2 mr-3 shrink-0 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
        </div>
        <div className="flex items-start">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-200 mt-2 mr-3 shrink-0 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

function BrandLogo({ brand, onImageLoad }: { brand: Brand, onImageLoad: () => void }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
    onImageLoad();
  };

  return (
    <div className="absolute -top-12 left-8 w-32 h-32 bg-white rounded-full border-[3px] border-truepal-green flex items-center justify-center p-4 shadow-sm overflow-hidden">
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-full" />
      )}
      {!hasError ? (
        <img 
          src={brand.image} 
          alt={`${brand.name} logo`}
          className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={handleLoad}
          onError={() => { setHasError(true); handleLoad(); }}
        />
      ) : (
        <span className="text-truepal-green font-bold text-center leading-tight">
          {brand.name}
        </span>
      )}
    </div>
  );
}

export function Brands() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  // Simulate page content fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setLoadedImagesCount(prev => prev + 1);
  };

  // We consider it fully loaded when both the simulated page load is done 
  // and all brand images are loaded (or errored out).
  const isFullyLoaded = isPageLoaded && loadedImagesCount >= brandsData.length;

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-truepal-green font-bold tracking-widest uppercase mb-2">Our Network</h2>
          <h3 className="text-4xl font-extrabold text-truepal-blue mb-6">Our Brands</h3>
          <p className="text-gray-600 text-lg">
            We partner with world-class manufacturers to provide high-quality equipment tailored to meet the exact requirements of your aquatic and thermal projects.
          </p>
        </div>

        {/* Skeleton Grid - Displayed while loading */}
        {!isFullyLoaded && (
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 mt-20">
            {[...Array(brandsData.length || 6)].map((_, i) => (
              <BrandSkeleton key={`skeleton-${i}`} />
            ))}
          </div>
        )}

        {/* Hidden Preload Grid - To trigger image loading without showing partial layout */}
        <div className={!isFullyLoaded ? "opacity-0 absolute pointer-events-none h-0 overflow-hidden" : "grid md:grid-cols-2 gap-x-8 gap-y-16 mt-20"}>
          {brandsData.map((brand, index) => (
            <motion.a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={isFullyLoaded ? { opacity: 1, y: 0 } : {}}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative block bg-truepal-blue rounded-xl p-8 pt-12 shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 transform duration-300"
            >
              <BrandLogo brand={brand} onImageLoad={handleImageLoad} />
              
              <div className="ml-[120px] sm:ml-[140px] mb-6">
                 <h4 className="text-xl sm:text-2xl font-bold text-truepal-green">{brand.name}</h4>
              </div>

              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-truepal-green mt-2 mr-3 shrink-0" />
                  <span>{brand.description}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-truepal-green mt-2 mr-3 shrink-0" />
                  <span><strong>Key Certifications:</strong> {brand.certifications}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-truepal-green mt-2 mr-3 shrink-0" />
                  <span><strong>Origin:</strong> {brand.origin}</span>
                </li>
              </ul>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
