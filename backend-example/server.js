const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock database (in production, use a real database)
let portfolioItems = [
  {
    id: 1,
    title: "PetVesta App",
    category: "app",
    image: "/assets/img/portfolio/app-1.png",
    gallery: "portfolio-gallery-app",
    link: "https://apps.apple.com/in/app/petvesta/id6499036298"
  },
  {
    id: 2,
    title: "Exeeria App",
    category: "product",
    image: "/assets/img/portfolio/app-2.png",
    gallery: "portfolio-gallery-product",
    link: "https://play.google.com/store/apps/details?id=com.exeeria&hl=en_IN&gl=US"
  }
];

let testimonials = [
  {
    id: 1,
    text: "このたびはリアルタイムチャットシステムの開発において、多大なるご尽力をいただき誠にありがとうございました。",
    author: "篤司 桐山",
    image: "/assets/img/testimonials/testimonials-6.png"
  }
];

let userProfile = {
  name: 'Ruby Manalo',
  title: 'フルスタック開発者',
  email: 'rubyxmanalo@gmail.com',
  location: 'フィリピン共和国 リサール州 カインタ町',
  birthday: '1996年3月14日',
  age: 29,
  degree: '学士',
  chatwork: 'https://www.chatwork.com/Naruto0103'
};

let stats = [
  { icon: 'bi bi-emoji-smile', end: 232, label: '満足のお客様数' },
  { icon: 'bi bi-journal-richtext', end: 521, label: '実績プロジェクト数' },
  { icon: 'bi bi-headset', end: 1453, label: 'サポート時間' },
  { icon: 'bi bi-people', end: 32, label: '努力するスタッフ数' }
];

// Email configuration (configure with your email service)
const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Routes

// Portfolio routes
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioItems);
});

app.get('/api/portfolio/:id', (req, res) => {
  const item = portfolioItems.find(item => item.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ error: 'Portfolio item not found' });
  }
  res.json(item);
});

app.post('/api/portfolio', (req, res) => {
  const newItem = {
    id: Date.now(),
    ...req.body
  };
  portfolioItems.push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/portfolio/:id', (req, res) => {
  const index = portfolioItems.findIndex(item => item.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Portfolio item not found' });
  }
  portfolioItems[index] = { ...portfolioItems[index], ...req.body };
  res.json(portfolioItems[index]);
});

app.delete('/api/portfolio/:id', (req, res) => {
  const index = portfolioItems.findIndex(item => item.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Portfolio item not found' });
  }
  portfolioItems.splice(index, 1);
  res.json({ message: 'Portfolio item deleted successfully' });
});

// Testimonials routes
app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});

app.post('/api/testimonials', (req, res) => {
  const newTestimonial = {
    id: Date.now(),
    ...req.body
  };
  testimonials.push(newTestimonial);
  res.status(201).json(newTestimonial);
});

// User profile routes
app.get('/api/user', (req, res) => {
  res.json(userProfile);
});

app.put('/api/user', (req, res) => {
  userProfile = { ...userProfile, ...req.body };
  res.json(userProfile);
});

// Contact form route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userProfile.email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message' 
    });
  }
});

// Skills routes
app.get('/api/skills', (req, res) => {
  res.json({
    frontend: [
      { name: 'Tailwind CSS, Bootstrap, Material UI', percentage: 100 },
      { name: 'Wordpress, Shopify', percentage: 90 },
      { name: 'React.js, Vue.js, Angular, Redux', percentage: 95 }
    ],
    backend: [
      { name: 'MySQL, PostgreSQL', percentage: 90 },
      { name: 'MongoDB, Firebase', percentage: 95 },
      { name: 'Prisma, Sequelize, Mongoose', percentage: 92 }
    ]
  });
});

// Stats routes
app.get('/api/stats', (req, res) => {
  res.json(stats);
});

app.put('/api/stats', (req, res) => {
  stats = req.body;
  res.json(stats);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
