import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/content/blog/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './post.css';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatContent(content) {
  // Simple markdown-like formatting
  return content
    .split('\n')
    .map((line, index) => {
      // Headers
      if (line.startsWith('## ')) {
        return <h2 key={index}>{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index}>{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('#### ')) {
        return <h4 key={index}>{line.replace('#### ', '')}</h4>;
      }
      // Lists
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\* - (.+)/);
        if (match) {
          return (
            <li key={index}>
              <strong>{match[1]}</strong> - {match[2]}
            </li>
          );
        }
      }
      if (line.startsWith('- ')) {
        return <li key={index}>{line.replace('- ', '')}</li>;
      }
      if (line.match(/^\d+\. /)) {
        return <li key={index}>{line.replace(/^\d+\. /, '')}</li>;
      }
      // Bold text
      if (line.includes('**')) {
        const parts = line.split(/\*\*(.+?)\*\*/g);
        return (
          <p key={index}>
            {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
          </p>
        );
      }
      // Tables (simplified)
      if (line.startsWith('|')) {
        return null; // Skip table formatting for now
      }
      // Empty lines
      if (line.trim() === '') {
        return null;
      }
      // Regular paragraphs
      return <p key={index}>{line}</p>;
    })
    .filter(Boolean);
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="blog-post">
        <article>
          <header className="post-header">
            <div className="container">
              <Link href="/blog" className="post-back">
                Back to Blog
              </Link>
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="post-title">{post.title}</h1>
              {post.titleAr && <p className="post-title-ar">{post.titleAr}</p>}
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-author">
                <span>By {post.author}</span>
              </div>
            </div>
          </header>

          <div className="post-content">
            <div className="container container--narrow">
              {formatContent(post.content)}
            </div>
          </div>

          <footer className="post-footer">
            <div className="container container--narrow">
              <div className="post-tags">
                <span className="post-tags__label">Tags:</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="post-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="post-share">
                <span className="post-share__label">Share this article:</span>
                <div className="post-share__links">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://sitedz.com/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://sitedz.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://sitedz.com/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </article>

        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <div className="container">
              <h2>Related Articles</h2>
              <div className="related-posts__grid">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    key={relatedPost.slug}
                    className="related-card"
                  >
                    <span className="related-card__category">{relatedPost.category}</span>
                    <h3>{relatedPost.title}</h3>
                    <span className="related-card__link">Read Article</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="post-cta">
          <div className="container">
            <div className="post-cta__box">
              <h2>Ready to Start Your Project?</h2>
              <p>Let's turn your ideas into reality. Contact SiteDZ for expert web and mobile development.</p>
              <Link href="/#contact" className="btn btn-primary">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
