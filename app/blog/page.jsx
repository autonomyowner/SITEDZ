import Link from 'next/link';
import { blogPosts, getFeaturedPosts, getAllCategories } from '@/content/blog/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './blog.css';

export const metadata = {
  title: 'Blog | Tech Insights & Digital Solutions',
  description: 'Expert articles on web development, mobile apps, SEO, and digital transformation in Algeria. Stay updated with the latest tech trends and best practices.',
  keywords: [
    'tech blog Algeria',
    'web development tips',
    'mobile app development guide',
    'SEO Algeria',
    'digital transformation',
    'مدونة تقنية الجزائر',
  ],
  openGraph: {
    title: 'SiteDZ Blog | Tech Insights for Algerian Businesses',
    description: 'Expert articles on web development, mobile apps, and digital solutions.',
  },
};

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();

  return (
    <>
      <Navbar />
      <main className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <span className="section-label">Our Blog</span>
            <h1>Tech Insights & <span className="text-gradient">Digital Solutions</span></h1>
            <p className="blog-hero__subtitle">
              Expert articles on web development, mobile apps, SEO, and digital transformation
              for Algerian businesses.
            </p>
          </div>
        </section>

        <section className="blog-featured">
          <div className="container">
            <h2 className="blog-section-title">Featured Articles</h2>
            <div className="blog-featured__grid">
              {featuredPosts.slice(0, 3).map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card blog-card--featured">
                  <div className="blog-card__category">{post.category}</div>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-categories">
          <div className="container">
            <div className="blog-categories__list">
              <span className="blog-categories__label">Categories:</span>
              {categories.map((category) => (
                <span key={category} className="blog-categories__item">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-all">
          <div className="container">
            <h2 className="blog-section-title">All Articles</h2>
            <div className="blog-all__grid">
              {blogPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                  <div className="blog-card__category">{post.category}</div>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="blog-card__link">Read Article</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-cta">
          <div className="container">
            <div className="blog-cta__box">
              <h2>Need Help with Your Project?</h2>
              <p>Our team of experts is ready to help you achieve your digital goals.</p>
              <Link href="/#contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
