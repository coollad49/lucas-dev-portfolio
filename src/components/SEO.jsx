import { useEffect } from 'react';

const SEO = ({ 
  title = "Lucas-Adebayo Daniel | Full Stack Software Engineer",
  description = "Lucas-Adebayo Daniel is a Full Stack Software Engineer specializing in Django and Next.js development. View my portfolio with 7+ professional projects, 12+ verified skills, and experience in Python, React, TypeScript, and modern web technologies.",
  keywords = "Lucas-Adebayo Daniel, Software Engineer, Full Stack Developer, Django Developer, Next.js Developer, Python Developer, React Developer, TypeScript Developer, Web Development, Portfolio",
  image = "https://lucasbuilds.tech/src/assets/me.jpg",
  url = "https://lucasbuilds.tech"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const updateMetaTag = (property, content) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      }
    };
    
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    
    // Update Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:url', url);
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    }
    
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything
};

export default SEO; 