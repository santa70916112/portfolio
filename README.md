# Portfolio React Application

A modern React portfolio website converted from static HTML, ready for backend integration.

## Features

- ✅ **React 18** with Vite for fast development
- ✅ **React Router** for navigation
- ✅ **Context API** for state management
- ✅ **AOS (Animate On Scroll)** for animations
- ✅ **Swiper** for testimonials carousel
- ✅ **Bootstrap** for responsive design
- ✅ **Modular Components** for easy maintenance
- ✅ **API Service Layer** ready for backend integration

## Project Structure

```
portfolio/
├── public/
│   └── assets/           # Static assets (images, CSS, JS)
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Stats.jsx
│   │   ├── Skills.jsx
│   │   ├── Resume.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/          # React Context for state management
│   │   └── PortfolioContext.jsx
│   ├── services/         # API service layer
│   │   └── api.js
│   ├── hooks/           # Custom React hooks
│   │   └── useAPI.js
│   ├── App.jsx          # Main App component
│   ├── App.css          # App-specific styles
│   └── main.jsx         # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Backend Integration

The application is ready for backend integration with the following API endpoints:

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3001/api
```

### API Endpoints

The application expects the following backend endpoints:

#### Portfolio Items
- `GET /api/portfolio` - Get all portfolio items
- `GET /api/portfolio/:id` - Get portfolio item by ID
- `POST /api/portfolio` - Create new portfolio item
- `PUT /api/portfolio/:id` - Update portfolio item
- `DELETE /api/portfolio/:id` - Delete portfolio item

#### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/:id` - Get testimonial by ID
- `POST /api/testimonials` - Create new testimonial
- `PUT /api/testimonials/:id` - Update testimonial
- `DELETE /api/testimonials/:id` - Delete testimonial

#### User Profile
- `GET /api/user` - Get user profile
- `PUT /api/user` - Update user profile

#### Contact Form
- `POST /api/contact` - Send contact message

#### Skills
- `GET /api/skills` - Get all skills
- `PUT /api/skills` - Update skills

#### Stats
- `GET /api/stats` - Get all stats
- `PUT /api/stats` - Update stats

### Backend Implementation Examples

#### Node.js/Express Example

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Portfolio routes
app.get('/api/portfolio', (req, res) => {
  // Return portfolio items
});

app.post('/api/portfolio', (req, res) => {
  // Create new portfolio item
});

// Contact form
app.post('/api/contact', (req, res) => {
  // Handle contact form submission
  const { name, email, subject, message } = req.body;
  
  // Send email or save to database
  res.json({ success: true, message: 'Message sent successfully' });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

#### PHP/Laravel Example

```php
// routes/api.php
Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::post('/portfolio', [PortfolioController::class, 'store']);
Route::put('/portfolio/{id}', [PortfolioController::class, 'update']);
Route::delete('/portfolio/{id}', [PortfolioController::class, 'destroy']);

Route::post('/contact', [ContactController::class, 'send']);
```

### Database Schema Examples

#### Portfolio Items
```sql
CREATE TABLE portfolio_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image VARCHAR(500) NOT NULL,
  gallery VARCHAR(100),
  link VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### Testimonials
```sql
CREATE TABLE testimonials (
  id INT PRIMARY KEY AUTO_INCREMENT,
  text TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  image VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Contact Messages
```sql
CREATE TABLE contact_messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## State Management

The application uses React Context for state management:

- **PortfolioContext**: Manages portfolio data, testimonials, user info, and loading states
- **usePortfolio**: Custom hook to access portfolio context
- **useAPI**: Custom hooks for API calls

## Customization

### Adding New Components

1. Create component in `src/components/`
2. Import and use in `App.jsx`
3. Add any necessary state to `PortfolioContext.jsx`

### Styling

- Main styles: `public/assets/css/main.css`
- App-specific styles: `src/App.css`
- Component-specific styles can be added as CSS modules

### Adding New API Endpoints

1. Add endpoint to `src/services/api.js`
2. Create corresponding hook in `src/hooks/useAPI.js`
3. Update context if needed

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Set environment variables

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload `dist` folder contents to your web server
3. Configure server to serve `index.html` for all routes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).