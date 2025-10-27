import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, PieChart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">SokoApp</h1>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#screenshots" className="hover:text-primary transition-colors">Screenshots</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </nav>
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white">
            Download Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>
         <div className="absolute inset-0 opacity-10 z-0"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">Connect, Share & Discover</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">SokoApp is your new hub for connecting with friends and discovering amazing content. Join our vibrant community today!</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">Download Now <ArrowRight className="ml-2 h-5 w-5" /></Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">Learn More</Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0f63496f-006c-4451-89af-b18076e63654/hero-mockup-07lmln0-1761590860449.webp" alt="App Mockup" className="w-full h-auto rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Why You'll Love SokoApp</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div variants={featureVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.1 }} viewport={{ once: true }} className="text-center p-6 bg-gray-800 rounded-lg">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center mb-4">
                 <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-semibold mb-2">Secure Chat</h4>
              <p className="text-gray-400">End-to-end encrypted messaging to keep your conversations private and secure.</p>
            </motion.div>
            <motion.div variants={featureVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-center p-6 bg-gray-800 rounded-lg">
               <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center mb-4">
                 <PieChart className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-semibold mb-2">Insightful Analytics</h4>
              <p className="text-gray-400">Track your engagement and growth with our powerful, easy-to-use analytics dashboard.</p>
            </motion.div>
            <motion.div variants={featureVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.3 }} viewport={{ once: true }} className="text-center p-6 bg-gray-800 rounded-lg">
               <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-semibold mb-2">Community Feed</h4>
              <p className="text-gray-400">Discover trending topics, connect with new people, and share your moments.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">See SokoApp in Action</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}><img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0f63496f-006c-4451-89af-b18076e63654/screenshot-1-hmwn9oc-1761590868921.webp" alt="Screenshot 1" className="rounded-lg shadow-lg" /></motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}><img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0f63496f-006c-4451-89af-b18076e63654/screenshot-2-g31akpz-1761590879803.webp" alt="Screenshot 2" className="rounded-lg shadow-lg" /></motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}><img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0f63496f-006c-4451-89af-b18076e63654/screenshot-3-uvj4oz9-1761590887237.webp" alt="Screenshot 3" className="rounded-lg shadow-lg" /></motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Loved by Users Worldwide</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-300 mb-4">"SokoApp has changed the way I connect with my friends. It's fast, beautiful, and so easy to use. Highly recommended!"</p>
              <div className="flex items-center">
                 <img src="https://i.pravatar.cc/40?u=a042581f4e29026704d" alt="User 1" className="w-10 h-10 rounded-full mr-4"/>
                <div>
                  <p className="font-semibold">Amina Yusuf</p>
                  <p className="text-sm text-gray-400">Digital Marketer, Nairobi</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-300 mb-4">"The analytics are a game-changer for me. I can finally see what content my audience loves the most. Incredible app!"</p>
              <div className="flex items-center">
                <img src="https://i.pravatar.cc/40?u=a042581f4e29026704e" alt="User 2" className="w-10 h-10 rounded-full mr-4"/>
                <div>
                  <p className="font-semibold">Kwame Mensah</p>
                  <p className="text-sm text-gray-400">Content Creator, Accra</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gray-900 p-8 rounded-lg border border-gray-700 flex flex-col">
              <h4 className="text-2xl font-bold mb-4">Free</h4>
              <p className="text-5xl font-extrabold mb-4">$0<span className="text-lg font-normal text-gray-400">/mo</span></p>
              <ul className="space-y-3 text-gray-300 mb-8 flex-grow">
                <li>Basic Features</li>
                <li>Community Access</li>
                <li>Up to 1GB Storage</li>
              </ul>
              <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-gray-900">Get Started</Button>
            </motion.div>
            {/* Pro Plan */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-primary p-8 rounded-lg text-white relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 m-4 bg-white text-primary px-2 py-1 text-xs font-bold rounded">POPULAR</div>
              <h4 className="text-2xl font-bold mb-4">Pro</h4>
              <p className="text-5xl font-extrabold mb-4">$9<span className="text-lg font-normal opacity-80">/mo</span></p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li>Advanced Analytics</li>
                <li>Priority Support</li>
                <li>Unlimited Storage</li>
                <li>Ad-Free Experience</li>
              </ul>
              <Button className="w-full bg-white text-primary hover:bg-gray-200">Choose Pro</Button>
            </motion.div>
            {/* Enterprise Plan */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-gray-900 p-8 rounded-lg border border-gray-700 flex flex-col">
              <h4 className="text-2xl font-bold mb-4">Enterprise</h4>
              <p className="text-5xl font-extrabold mb-4">Contact</p>
              <ul className="space-y-3 text-gray-300 mb-8 flex-grow">
                <li>Dedicated Infrastructure</li>
                <li>Custom Integrations</li>
                <li>24/7 Premium Support</li>
              </ul>
              <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-gray-900">Contact Us</Button>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Demo Video Section */}
       <section id="demo" className="py-20">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-4xl font-bold mb-8">Watch SokoApp in Action</h3>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-video max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </motion.div>
         </div>
       </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">Get Started with SokoApp Today</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Download the app and join a fast-growing community of creators and friends across Africa and beyond.</p>
          <div className="flex justify-center items-center space-x-4">
            <a href="#" className="transform hover:scale-105 transition-transform"><img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0f63496f-006c-4451-89af-b18076e63654/apple-store-badge-068e4ln-1761590894092.webp" alt="Apple Store" className="h-16" /></a>
            <a href="#" className="transform hover:scale-105 transition-transform"><img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0f63496f-006c-4451-89af-b18076e63654/google-play-badge-xfh29vx-1761590900831.webp" alt="Google Play" className="h-16" /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-4">Contact us at: <a href="mailto:support@sokoapp.com" className="hover:text-primary">support@sokoapp.com</a></p>
          <div className="flex justify-center space-x-6 mb-4">
             <a href="#" className="hover:text-white">About Us</a>
             <a href="#" className="hover:text-white">Contact</a>
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <p>&copy; 2025 SokoApp. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
