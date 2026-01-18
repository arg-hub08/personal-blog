import React, { useState, useEffect } from 'react';
import { Heart, Search, Trash2, Edit3, Plus, Menu, X } from 'lucide-react';

const TechGlazBlog = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category: 'WEB BASICS',
    imageUrl: '',
    author: 'You'
  });

  useEffect(() => {
      const defaultBlogs = [
        {
          id: 1,
          title: 'HTML & CSS Fundamentals',
          description: 'Learn the building blocks of web development. HTML structures your content while CSS brings it to life with beautiful styling.',
          content: 'HTML and CSS are the foundation of web development. HTML (HyperText Markup Language) provides the structure and content of web pages, while CSS (Cascading Style Sheets) handles the presentation and styling. Together, they create the visual experience users see in their browsers. Understanding semantic HTML, CSS selectors, flexbox, and grid layouts are essential skills for any web developer. HTML5 introduced new semantic elements like header, nav, main, article, and footer that help organize content better. CSS Grid and Flexbox are modern layout techniques that make responsive design easier. Master these fundamentals and youll have a strong foundation for web development!',
          category: 'WEB BASICS',
          imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop',
          author: 'You',
          date: 'Jan 12, 2025',
          likes: 0
        },
        {
          id: 2,
          title: 'JavaScript Essentials',
          description: 'Master the language of the web. Discover how JavaScript makes your websites interactive and dynamic with real-time functionality.',
          content: 'JavaScript is the programming language of the web. It allows you to add interactivity to your websites and create dynamic content. From handling user events to manipulating the DOM, JavaScript is essential for modern web development. Learn about variables, functions, callbacks, promises, and async/await to become proficient in JavaScript. ES6 introduced classes, arrow functions, template literals, and destructuring that make code cleaner and more readable. Event listeners allow you to respond to user interactions like clicks, typing, and scrolling. Understanding the JavaScript event loop and asynchronous programming is crucial for building responsive applications.',
          category: 'PROGRAMMING',
          imageUrl: 'https://imgs.search.brave.com/jYpAFFEB3lkucXHWIIB6yeLoKmq1wx5k-VItsBS4kLQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvamF2YXNj/cmlwdC1wcm9ncmFt/bWluZy1sYW5ndWFn/ZS1zY3JpcHQtY29k/ZS0yNjBudy0xOTI1/NTYzMTk2LmpwZw',
          author: 'You',
          date: 'Jan 10, 2025',
          likes: 0
        },
        {
          id: 3,
          title: 'Getting Started with React',
          description: 'Build modern web applications with React. Learn components, hooks, and state management for creating scalable web solutions.',
          content: 'React is a powerful JavaScript library for building user interfaces with reusable components. It uses a virtual DOM for efficient rendering and provides hooks like useState and useEffect for state management. React Router enables client-side routing, making it perfect for building single-page applications. Master JSX syntax, component composition, and props to become a React expert. Functional components with hooks have become the standard way to write React code. State management libraries like Redux or Context API help manage complex application state. React DevTools browser extension is invaluable for debugging React applications. Understanding the React lifecycle and rendering optimization techniques will help you build performant applications.',
          category: 'FRAMEWORKS',
          imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
          author: 'You',
          date: 'Jan 08, 2025',
          likes: 0
        },
        {
          id: 4,
          title: 'Server-Side Development',
          description: 'Explore backend technologies and databases. Learn how servers handle requests and store data for your web applications.',
          content: 'Backend development involves building the server-side logic and databases that power web applications. Technologies like Node.js, Python, and databases like MongoDB and PostgreSQL are essential. Understanding RESTful APIs, authentication, and database design is crucial for full-stack development. Learn how to handle requests, manage data, and scale applications. Express.js is a popular Node.js framework for building web servers and APIs. Database design requires understanding normalization, relationships, and indexing for optimal performance. Authentication and authorization are critical for securing user data. API documentation tools like Swagger help communicate your endpoints to frontend developers. Implementing caching strategies and load balancing ensures your backend can handle high traffic.',
          category: 'BACKEND',
          imageUrl: 'https://imgs.search.brave.com/hnskkDaeQcIk1BRxBUz-_1gcDPXYQVrNOYWeA_RdHgo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2Nzg1NjU5/OTkzMzItMWNkZTQ2/MmY3YjI0P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/TjhmSEpsWVdOMGZH/VnVmREI4ZkRCOGZI/d3c',
          author: 'You',
          date: 'Jan 05, 2025',
          likes: 0
        },
        {
          id: 5,
          title: 'Responsive Web Design',
          description: 'Create websites that work on all devices. Master CSS Grid, Flexbox, and media queries for perfect mobile and desktop experiences.',
          content: 'Responsive web design ensures your websites look great on all screen sizes. Using CSS media queries, flexbox, and grid layouts, you can create flexible designs that adapt to different devices. Mobile-first design approach is crucial in todays mobile-heavy internet usage. Learn viewport settings, breakpoints, and responsive typography. CSS Grid is perfect for creating complex layouts while Flexbox excels at one-dimensional layouts. Breakpoints should be chosen based on your content, not specific device sizes. Fluid typography scales smoothly between different screen sizes. Testing on real devices and using browser developer tools helps ensure your design works everywhere. Accessibility should be considered from the start, not as an afterthought.',
          category: 'DESIGN',
          imageUrl: 'https://imgs.search.brave.com/EN3zSdUkx7QvDV2sBys-Z0jbqDcZTJl64NwLlPUdJmw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/ZmxhdC1kZXNpZ24t/cmVzcG9uc2l2ZS13/ZWJzaXRlLWRlc2ln/bl8yMy0yMTQ5NDgz/ODA4LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA',
          author: 'You',
          date: 'Jan 02, 2025',
          likes: 0
        },
        {
          id: 6,
          title: 'Web Performance Tips',
          description: 'Optimize your web apps for speed and efficiency. Learn about caching, compression, and other techniques to improve user experience.',
          content: 'Web performance is critical for user experience and SEO rankings. Techniques like lazy loading, image optimization, minification, and caching can significantly improve load times. Use tools like Lighthouse and WebPageTest to analyze and optimize your websites. Understanding Core Web Vitals and implementing best practices ensures fast, responsive applications. Image optimization involves using modern formats like WebP and serving responsive images with srcset. Code splitting allows you to load only the code needed for the current page. Service workers enable offline functionality and faster repeat visits through caching. Compression of assets using gzip or brotli reduces file sizes. Monitoring real user metrics helps identify performance bottlenecks in production. A faster website improves user satisfaction, reduces bounce rates, and increases conversions.',
          category: 'OPTIMIZATION',
          imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
          author: 'You',
          date: 'Dec 28, 2024',
          likes: 0
        },
        {
          id: 7,
          title: 'Understanding Web APIs',
          description: 'Explore the powerful APIs available in modern browsers for building interactive web applications.',
          content: 'Web APIs provide standardized ways to interact with browser features and services, enabling developers to create rich and interactive web experiences. The Fetch API is one of the most important web APIs. It allows you to make HTTP requests to retrieve data from servers asynchronously. Instead of using the older XMLHttpRequest, Fetch provides a cleaner, promise-based interface for making network requests. You can fetch JSON data, form submissions, file uploads, and more. Fetch handles various response types and provides better error handling through the promise chain. LocalStorage and SessionStorage provide ways to store data on the client side persistently. LocalStorage keeps data even after the browser is closed, while SessionStorage clears when the tab is closed. This is useful for saving user preferences, caching data, and maintaining application state. However, be mindful of storage limits and security implications with sensitive data. The Geolocation API gives you access to the users location with their permission. This enables location-based services like maps, local search, and context-aware content. The API provides latitude, longitude, and accuracy information. Always request permission and handle cases where users deny access or when location services are unavailable. Canvas and WebGL APIs enable 2D and 3D graphics rendering directly in the browser. Canvas is perfect for drawing shapes, images, and animations programmatically. WebGL provides GPU-accelerated 3D graphics for games and visualizations. These APIs give developers the power to create visually stunning interactive content. The Audio and Video APIs allow you to embed and control media content without relying on plugins. You can play, pause, control volume, and track playback progress. These APIs are essential for building multimedia applications and custom media players. Service Workers enable progressive web apps with offline functionality and background tasks. They act as a proxy between your web app and the network, allowing you to cache assets, intercept requests, and send push notifications. Service Workers are essential for creating app-like experiences on the web. The Notification API allows you to send notifications to users, keeping them engaged even when they are not actively using your site. Combined with Service Workers, you can create powerful push notification systems. The History API provides control over browser history, enabling you to manipulate the address bar and history stack without reloading the page. This is crucial for creating smooth single-page application navigation. Other important APIs include the Clipboard API for copying and pasting, the Screen API for detecting screen size and orientation, the Battery API for checking device battery status, and many more. Understanding these APIs opens up endless possibilities for creating innovative web experiences while respecting user privacy and security.',
          category: 'PROGRAMMING',
          imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
          author: 'You',
          date: 'Dec 25, 2024',
          likes: 0
        }
      ];
     setBlogs(defaultBlogs);
  }, []);
 

  const handleSaveBlog = () => {
    if (!formData.title || !formData.content) {
      alert('Please fill in required fields');
      return;
    }

    if (editingId) {
      const updatedBlogs = blogs.map(b => 
        b.id === editingId 
          ? { ...b, ...formData }
          : b
      );
      setBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      setEditingId(null);
    } else {
      const newBlog = {
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        likes: 0
      };
      const newBlogs = [...blogs, newBlog];
      setBlogs(newBlogs);
      localStorage.setItem('blogs', JSON.stringify(newBlogs));
    }

    setFormData({ title: '', description: '', content: '', category: 'WEB BASICS', imageUrl: '', author: 'You' });
    setCurrentPage('blogs');
  };

  const handleDeleteBlog = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      const updatedBlogs = blogs.filter(b => b.id !== id);
      setBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    }
  };

  const handleEditBlog = (blog) => {
    setFormData(blog);
    setEditingId(blog.id);
    setCurrentPage('create');
  };

  const handleLikeBlog = (id) => {
    const updatedBlogs = blogs.map(b => 
      b.id === id ? { ...b, likes: b.likes + 1 } : b
    );
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const filteredBlogs = blogs.filter(b => {
    const matchesCategory = selectedCategory === 'all' || b.category === selectedCategory;
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const Navbar = () => (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl sticky top-0 z-50 border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">⚡</div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-black leading-tight">Web Development</h1>
              <h1 className="text-2xl font-black leading-tight">Technologies</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={() => setCurrentPage('home')} className="hidden sm:block text-white hover:text-blue-400 transition font-semibold">HOME</button>
            <button onClick={() => setCurrentPage('create')} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105">👤 ADMIN</button>
            <button className="sm:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 pt-4 border-t border-slate-700 space-y-2">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left text-white hover:text-blue-400">HOME</button>
            <button onClick={() => { setCurrentPage('blogs'); setMobileMenuOpen(false); }} className="block w-full text-left text-white hover:text-blue-400">ALL BLOGS</button>
            <button onClick={() => { setCurrentPage('create'); setMobileMenuOpen(false); }} className="block w-full text-left text-white hover:text-blue-400">CREATE</button>
            <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block w-full text-left text-white hover:text-blue-400">ABOUT</button>
          </div>
        )}
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-slate-950 text-gray-400 mt-16 py-8 border-t border-blue-900/30">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4 font-semibold text-white">Connect with me on social media</p>
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:shadow-lg transition text-white font-bold text-lg">📘</a>
          <a href="#" className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition text-white">𝕏</a>
          <a href="#" className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition text-white font-bold text-lg">✉️</a>
          <a href="#" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition text-white text-lg">in</a>
        </div>
        <p>© 2025 My Blog. All rights reserved.</p>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.slice(0, 6).map(blog => (
            <div key={blog.id} onClick={() => setCurrentPage(`detail-${blog.id}`)} className="group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20 hover:border-blue-500/50 transition bg-gradient-to-br from-slate-800 to-slate-900 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">{blog.category}</span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{blog.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-blue-400 text-sm font-semibold">{blog.date}</span>
                    <button onClick={(e) => { e.stopPropagation(); setCurrentPage(`detail-${blog.id}`); }} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full font-bold hover:shadow-lg transition transform hover:scale-105">
                      READ MORE →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const BlogsPage = () => (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-white mb-8">All Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-4 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-blue-500/30 rounded-2xl text-white focus:outline-none focus:border-blue-500 placeholder-gray-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-2xl text-white focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="WEB BASICS">WEB BASICS</option>
            <option value="PROGRAMMING">PROGRAMMING</option>
            <option value="FRAMEWORKS">FRAMEWORKS</option>
            <option value="BACKEND">BACKEND</option>
            <option value="DESIGN">DESIGN</option>
            <option value="OPTIMIZATION">OPTIMIZATION</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map(blog => (
              <div key={blog.id} onClick={() => setCurrentPage(`detail-${blog.id}`)} className="group cursor-pointer">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20 hover:border-blue-500/50 transition bg-gradient-to-br from-slate-800 to-slate-900 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">{blog.category}</span>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{blog.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <span className="text-blue-400 text-sm font-semibold">{blog.date}</span>
                      <button onClick={(e) => { e.stopPropagation(); setCurrentPage(`detail-${blog.id}`); }} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full font-bold hover:shadow-lg transition transform hover:scale-105">
                        READ MORE →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center py-12">No blogs found</p>
          )}
        </div>
      </div>
    </div>
  );

  const BlogDetailsPage = ({ blogId }) => {
    const blog = blogs.find(b => b.id === parseInt(blogId));
    if (!blog) return <div className="text-center py-12 text-white">Blog not found</div>;

    const relatedBlogs = blogs.filter(b => b.category === blog.category && b.id !== blog.id).slice(0, 3);

    return (
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen pt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => setCurrentPage('blogs')} className="text-blue-400 mb-8 hover:text-blue-300 font-semibold flex items-center gap-2">
            ← Back to Blogs
          </button>
          
          <img src={blog.imageUrl} alt={blog.title} className="w-full h-96 object-cover rounded-3xl mb-8 shadow-2xl" />
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-3xl p-8 mb-8 shadow-2xl">
            <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
              <div className="flex-1">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">{blog.category}</span>
                <h1 className="text-5xl font-black text-white mb-3">{blog.title}</h1>
                <p className="text-gray-400">By {blog.author} • {blog.date}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleLikeBlog(blog.id)} className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-2xl hover:bg-red-700 transition font-bold shadow-lg">
                  <Heart size={20} /> {blog.likes}
                </button>
                <button onClick={() => handleEditBlog(blog)} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition shadow-lg">
                  <Edit3 size={20} />
                </button>
                <button onClick={() => { handleDeleteBlog(blog.id); setCurrentPage('blogs'); }} className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-2xl hover:bg-red-700 transition shadow-lg">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">{blog.content}</p>
          </div>

          {relatedBlogs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-3xl font-black text-white mb-6">Related Blogs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedBlogs.map(b => (
                  <div key={b.id} onClick={() => setCurrentPage(`detail-${b.id}`)} className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg border border-blue-500/20 hover:border-blue-500/50 transition bg-gradient-to-br from-slate-800 to-slate-900">
                    <img src={b.imageUrl} alt={b.title} className="w-full h-32 object-cover group-hover:scale-110 transition" />
                    <div className="p-4">
                      <h4 className="font-bold text-white mb-2 group-hover:text-blue-400 transition">{b.title}</h4>
                      <p className="text-xs text-gray-500">{b.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const CreateBlogPage = () => (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen pt-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black mb-8 text-white">{editingId ? 'Edit Blog' : 'Create New Blog'}</h1>
        
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-3xl p-8 space-y-6 shadow-2xl">
          <div>
            <label className="block font-bold mb-3 text-white">Blog Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-4 py-3 bg-slate-700 border border-blue-500/30 rounded-2xl text-white focus:outline-none focus:border-blue-500"
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <label className="block font-bold mb-3 text-white">Short Description *</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-3 bg-slate-700 border border-blue-500/30 rounded-2xl text-white focus:outline-none focus:border-blue-500"
              placeholder="Brief description of your blog"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold mb-3 text-white">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-3 bg-slate-700 border border-blue-500/30 rounded-2xl text-white focus:outline-none focus:border-blue-500"
              >
                <option>WEB BASICS</option>
                <option>PROGRAMMING</option>
                <option>FRAMEWORKS</option>
                <option>BACKEND</option>
                <option>DESIGN</option>
                <option>OPTIMIZATION</option>
              </select>
            </div>
            <div>
              <label className="block font-bold mb-3 text-white">Image URL *</label>
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                className="w-full px-4 py-3 bg-slate-700 border border-blue-500/30 rounded-2xl text-white focus:outline-none focus:border-blue-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold mb-3 text-white">Blog Content *</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="w-full px-4 py-3 bg-slate-700 border border-blue-500/30 rounded-2xl text-white focus:outline-none focus:border-blue-500 h-64"
              placeholder="Write your blog content here..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button onClick={handleSaveBlog} className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-2xl hover:shadow-lg font-bold transition">
              {editingId ? 'Update Blog' : 'Create Blog'}
            </button>
            <button onClick={() => { setCurrentPage('blogs'); setEditingId(null); setFormData({ title: '', description: '', content: '', category: 'WEB BASICS', imageUrl: '', author: 'You' }); }} className="flex-1 bg-slate-700 text-gray-300 py-3 rounded-2xl hover:bg-slate-600 font-bold transition">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen pt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-4xl font-black mb-6 text-white">About Me</h1>
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Welcome to Web Development Technologies!</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              I'm a passionate web developer and content creator dedicated to helping others learn about modern web technologies, design principles, and best practices in software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-700/50 rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Skills & Expertise</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✓ ReactJS & Modern JavaScript</li>
                <li>✓ Web Design & UI/UX</li>
                <li>✓ Full Stack Development</li>
                <li>✓ Responsive Design</li>
                <li>✓ Database Management</li>
                <li>✓ Web Performance Optimization</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Interests</h3>
              <ul className="space-y-3 text-gray-300">
                <li>💡 Web Development Trends</li>
                <li>🎨 UI/UX Design</li>
                <li>📚 Teaching & Mentoring</li>
                <li>🚀 Open Source Contribution</li>
                <li>🔍 Web Performance</li>
                <li>🌐 Cloud Technologies</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-700/50 rounded-2xl p-6 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Why This Blog?</h3>
            <p className="text-gray-300 leading-relaxed">
              This blog is my platform to share knowledge, document my learning journey, and help aspiring developers understand complex concepts in a simple way. Every article is written with the goal of making web development more accessible and enjoyable for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'blogs' && <BlogsPage />}
        {currentPage === 'create' && <CreateBlogPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage.startsWith('detail-') && <BlogDetailsPage blogId={currentPage.split('-')[1]} />}
      </main>

      <Footer />
    </div>
  );
};

export default TechGlazBlog;
