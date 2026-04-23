/**
 * extractCategories.js
 * Derives unique categories from the blog list response.
 * No separate /categories endpoint exists — categories come from blog data.
 */

export function extractCategories(blogs = []) {
  const seen = new Set();
  const categories = ['All Topics'];

  blogs.forEach((blog) => {
    const cat = blog.category;
    if (cat && !seen.has(cat)) {
      seen.add(cat);
      categories.push(cat);
    }
  });

  return categories;
}
