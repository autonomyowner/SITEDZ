const Blog = () => {
  const blogPosts = [
    {
      title: "Comment optimiser votre site web pour le marché algérien en 2025",
      excerpt: "Découvrez les stratégies SEO spécifiques au marché algérien et comment adapter votre contenu pour attirer plus de clients locaux.",
      date: "15 Janvier 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      category: "SEO & Marketing",
      readTime: "5 min"
    },
    {
      title: "Les tendances e-commerce en Algérie : ce qui fonctionne en 2025",
      excerpt: "Analyse des comportements d'achat en ligne des consommateurs algériens et les meilleures pratiques pour votre boutique.",
      date: "12 Janvier 2025",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop&crop=center",
      category: "E-commerce",
      readTime: "7 min"
    },
    {
      title: "Guide complet : Créer une présence Google Business en Algérie",
      excerpt: "Tout ce que vous devez savoir pour optimiser votre profil Google Business et attirer plus de clients dans votre région.",
      date: "10 Janvier 2025",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center",
      category: "Google Business",
      readTime: "6 min"
    }
  ]

  return (
    <section id="blog" className="py-16 px-4 luxora-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            Actualités & Conseils
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Restez à jour avec les dernières tendances digitales en Algérie. 
            Conseils pratiques pour développer votre entreprise en ligne.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            <span className="text-center">
              Expertise locale pour le marché algérien
            </span>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="luxora-card overflow-hidden hover:shadow-lg transition-shadow">
              {/* Post Image */}
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold luxora-text mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                    Lire la suite →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Categories */}
        <div className="luxora-card p-8 mb-16">
          <h3 className="text-2xl font-bold luxora-text text-center mb-8">Catégories populaires</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 hover:bg-green-50 rounded-lg transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🔍</span>
              </div>
              <h4 className="font-semibold luxora-text mb-2">SEO & Marketing</h4>
              <p className="text-sm text-gray-600">Optimisation et visibilité</p>
            </div>
            
            <div className="text-center p-4 hover:bg-green-50 rounded-lg transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🛒</span>
              </div>
              <h4 className="font-semibold luxora-text mb-2">E-commerce</h4>
              <p className="text-sm text-gray-600">Boutiques en ligne</p>
            </div>
            
            <div className="text-center p-4 hover:bg-green-50 rounded-lg transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <h4 className="font-semibold luxora-text mb-2">Applications</h4>
              <p className="text-sm text-gray-600">Développement mobile</p>
            </div>
            
            <div className="text-center p-4 hover:bg-green-50 rounded-lg transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-xl">💼</span>
              </div>
              <h4 className="font-semibold luxora-text mb-2">Business</h4>
              <p className="text-sm text-gray-600">Stratégies d'entreprise</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold luxora-text mb-6">Besoin d'aide pour votre projet ?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Nos experts sont là pour vous accompagner dans votre transformation digitale. 
            Consultation gratuite et conseils personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="luxora-green-button text-base px-8 py-3"
              onClick={() => window.open('/contact', '_self')}
            >
              Consultation gratuite
            </button>
            <button 
              className="luxora-button text-base px-8 py-3"
              onClick={() => window.open('/services', '_self')}
            >
              Nos services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
