import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { useRouter } from '../router/Router';
import { ArrowLeft, ArrowRight, Clock, Calendar, User, CheckCircle2, Share2, MessageSquare, Mail } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { postSlug, navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const activePost = postSlug ? BLOG_POSTS.find((p) => p.slug === postSlug) : null;

  const categories = ['All', 'AI Automation', 'Software Architecture', 'Web3 & Blockchain', 'Commercial Governance', 'Mobile Engineering'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  const handleSelectPost = (slug: string) => {
    navigate('/blog', { slug });
  };

  const handleBackToList = () => {
    navigate('/blog');
  };

  // ─── SINGLE POST READER VIEW ───────────────────────────────────────────────
  if (activePost) {
    const blogPostingSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: activePost.title,
      description: activePost.excerpt,
      datePublished: '2025-01-15',
      author: {
        '@type': 'Person',
        name: activePost.author.name,
        jobTitle: activePost.author.role,
      },
      publisher: {
        '@type': 'Organization',
        name: 'AXORKS Technologies',
        url: 'https://axorks.com',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://axorks.com/blog/${activePost.slug}`,
      },
    };

    return (
      <div className="w-full pt-8 pb-20 lg:pb-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Action */}
          <button
            onClick={handleBackToList}
            className="inline-flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] hover:underline mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Technical Guides</span>
          </button>

          {/* Article Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase tracking-wider bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                {activePost.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono-code text-[var(--text-muted)]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{activePost.date}</span>
              </span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="flex items-center gap-1.5 text-xs font-mono-code text-[var(--text-muted)]">
                <Clock className="w-3.5 h-3.5" />
                <span>{activePost.readTime}</span>
              </span>
            </div>

            <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {activePost.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
              {activePost.excerpt}
            </p>

            {/* Author Strip */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[var(--gold)]/20 border border-[var(--gold)]/40 flex items-center justify-center font-mono-code text-sm font-bold text-[var(--gold)]">
                  {activePost.author.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-headline text-sm font-bold text-white">
                    {activePost.author.name}
                  </div>
                  <div className="text-xs font-mono-code text-[var(--text-muted)]">
                    {activePost.author.role} · Axorks Technologies
                  </div>
                </div>
              </div>

              <a
                href={`mailto:contact@axorks.com?subject=Question on ${encodeURIComponent(activePost.title)}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono-code text-[var(--gold)] hover:underline"
              >
                <span>Discuss with Author</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="p-6 rounded-2xl glass-2 border-white/10 mb-10">
            <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--gold)] mb-3">
              Table of Contents
            </h4>
            <ul className="space-y-2">
              {activePost.tableOfContents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                  <span className="font-mono-code text-[var(--gold)] font-bold">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <article className="space-y-10 text-slate-200 leading-relaxed">
            {activePost.content.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-display-hero text-2xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-2">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </article>

          {/* Key Takeaways Box on Refined Soft-Ivory Luxury Surface */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl surface-ivory spatial-card shadow-2xl border border-[rgba(214,207,195,0.85)]">
            <h3 className="font-display-hero text-lg font-bold text-[#0A0F1D] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#058A5E]" />
              <span>Key Architectural Takeaways</span>
            </h3>
            <ul className="space-y-3">
              {activePost.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1E293B]">
                  <span className="w-2 h-2 rounded-full bg-[#058A5E] mt-1.5 shrink-0" />
                  <span className="leading-relaxed font-normal">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Footer Conversion */}
          <div className="mt-14 p-8 rounded-3xl glass-2 border-[var(--gold)]/30 text-center">
            <h3 className="font-display-hero text-2xl font-bold text-white mb-2">
              Need Help Implementing This in Your Business?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6">
              Axorks engineers custom AI automations, web applications, and mobile systems with fixed-price milestones starting from $1,000.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer shadow-lg"
              >
                <span>Book Free Discovery Call</span>
              </button>
              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black/50 border border-[#10B981]/50 text-white text-xs font-headline font-semibold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-[#10B981]" />
                <span>WhatsApp: +92 314 103 0223</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── BLOG DIRECTORY VIEW ───────────────────────────────────────────────────
  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Engineering Insights</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Architectural Insights &amp; Engineering Guides.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            Practical analyses of AI automation workflows, custom web application architecture, cross-platform mobile systems, and fixed-price commercial governance.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-headline uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] font-bold shadow-md'
                    : 'glass-2 border-white/10 text-[var(--text-secondary)] hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              onClick={() => handleSelectPost(post.slug)}
              className="glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card cursor-pointer group flex flex-col justify-between border-white/10 hover:border-[var(--gold)]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                    {post.category}
                  </span>
                  <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-headline text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[var(--gold)] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-6 font-normal">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code">
                <span className="text-[var(--text-muted)]">{post.date}</span>
                <span className="flex items-center gap-1 text-[var(--gold)] font-bold group-hover:translate-x-1 transition-transform">
                  Read Technical Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
