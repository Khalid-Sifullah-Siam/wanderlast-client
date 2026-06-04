<div align="center">
<h1>🌍 Wanderlast</h1>
<p><strong>Seamless Travel Destination Booking Platform</strong></p>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.2-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-1.6-orange)](https://www.better-auth.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-3.1-blue)](https://heroui.com/)
</div>

---

## 📖 Description
Wanderlast is a modern travel booking platform built with the Next.js App Router. It allows users to explore breathtaking destinations, manage bookings, and personalize their travel experience. Designed with performance and security in mind, the platform offers a smooth interface for both browsing and trip planning.

## 🔗 Live Demo
Check out the live project: [Wanderlast Client](https://wanderlast-client-hazel.vercel.app)

## 🔗 Github Link
Check out the live project: [Github Repository](https://github.com/Khalid-Sifullah-Siam/wanderlast-client)

## ✨ Features
- 🔒 **Secure Authentication**: Robust registration and login system via Better Auth.
- 🌐 **Social Login**: Seamless Google OAuth integration for quick access.
- 🗺️ **Destination Discovery**: Browse a wide array of destinations with detailed information.
- � **Live Search**: Quickly filter destinations and bookings by typing destination names.
- ↕️ **Sort Options**: Sort destinations and booking lists alphabetically A-Z or Z-A.
- �📅 **Trip Management**: Easily book slots and manage your personal travel itinerary.
- 👤 **User Profile**: Dedicated dashboard to view and update personal travel history.
- 📱 **Fully Responsive**: Crafted with Tailwind CSS v4 for a pixel-perfect experience on all devices.
- 🚀 **Modern Tech Stack**: Leveraging Next.js 16 and React 19 for industry-leading performance.
- 🔔 **Interactive Feedback**: Real-time notifications for bookings and updates via `react-toastify`.

## 🛠 Tech Stack
| Category | Technology |
| :--- | :--- |
| **Frontend** | Next.js 16 (App Router), React 19, Tailwind CSS v4 |
| **Backend** | Next.js API Routes, Better Auth |
| **Database** | MongoDB |
| **UI Library** | HeroUI, Framer Motion, Lucide Icons |
| **State/Auth** | Better Auth Client, Context API |

## 📸 Screenshots
<div align="center">
<img src="./public/ReadmeImages/Screenshot (41).png" alt="Landing Page" width="400" />
<img src="./public/ReadmeImages/Screenshot (42).png" alt="Destinations" width="400" />
<img src="./public/ReadmeImages/Screenshot (43).png" alt="Booking" width="400" />
<img src="./public/ReadmeImages/Screenshot (44).png" alt="Profile" width="400" />
</div>

## ⚙️ Installation
1. **Clone the repository:**
```bash
git clone https://github.com/Khalid-Sifullah-Siam/wanderlast-client
cd wanderlast-client
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up Environment Variables:**
Create a `.env` file in the root directory and add the following:
```env
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BETTER_AUTH_URL=http://localhost:3000/api/auth
BETTER_AUTH_SECRET=your_better_auth_secret
```

4. **Run the project:**
```bash
npm run dev
```

## 🔑 Environment Variables
| Variable | Description |
| :--- | :--- |
| `MONGODB_URI` | Your MongoDB connection string for data persistence. |
| `GOOGLE_CLIENT_ID` | OAuth credentials from Google Cloud Console. |
| `GOOGLE_CLIENT_SECRET` | Secret key for Google OAuth authentication. |
| `BETTER_AUTH_URL` | The base URL for authentication endpoints. |

## 📂 Folder Structure
```text
src/
├── app/
│   ├── (auth)/             # Login, Signup pages
│   ├── destinations/       # Destination browsing & details
│   ├── my-booking/         # User booking management
│   ├── profile/            # User profile dashboard
│   ├── api/auth/           # Better Auth route handlers
│   └── globals.css         # Global styles with Tailwind v4
├── Components/
│   ├── Shared/             # Navbar, Footer
│   ├── Banner.jsx          # Hero section
│   └── DestinationCard.jsx # Reusable cards
├── lib/
│   ├── auth.js             # Server-side Auth Config
│   └── auth-client.js      # Frontend Auth Client
└── public/
    └── ReadmeImages/       # Project screenshots
```

## 🔒 Authentication
Wanderlast uses **Better Auth** with a MongoDB adapter for secure and scalable session management.
- **JWT Strategy**: Efficient token-based sessions.
- **Google OAuth**: One-click social login support.
- **Protected Routes**: Middleware and client-side hooks to secure user dashboards.

## 🚀 Deployment
This project is optimized for deployment on **Vercel**.
1. Connect your GitHub repository to Vercel.
2. Configure Environment Variables in the Vercel dashboard.
3. Deploy with the default build command: `npm run build`.

## 🧠 Challenges & Learning
- **Tailwind v4 Integration**: Implementing the latest Tailwind version required a new understanding of the CSS-first approach and `@theme` directives.
- **Better Auth Migration**: Setting up a custom MongoDB adapter for `better-auth` provided deep insights into modern authentication workflows.
- **React 19 Hooks**: Utilizing new React 19 features for state management and data fetching.

## 🔮 Future Improvements
- Add real-time reviews and ratings for destinations.
- Implement a wish-list feature for future trips.
- Integrate a payment gateway for direct booking payments.
- Add AI-powered travel recommendations.

## 👤 Author
**Khalid Sifullah Siam**
- [GitHub](https://github.com/Khalid-Sifullah-Siam)
- [LinkedIn](https://linkedin.com/in/khalid-sifullah-siam)

## 📄 License
This project has no License.


## 📸 Project Gallery
Below are all the screenshots of the Wanderlast platform:

<div align="center">
  <img src="./public/ReadmeImages/Screenshot (53).png" width="800" alt="Gallery 1" />
  <img src="./public/ReadmeImages/Screenshot (41).png" width="800" alt="Gallery 2" />
  <img src="./public/ReadmeImages/Screenshot (42).png" width="800" alt="Gallery 3" />
  <img src="./public/ReadmeImages/Screenshot (43).png" width="800" alt="Gallery 4" />
  <img src="./public/ReadmeImages/Screenshot (44).png" width="800" alt="Gallery 5" />
  <img src="./public/ReadmeImages/Screenshot (45).png" width="800" alt="Gallery 6" />
  <img src="./public/ReadmeImages/Screenshot (46).png" width="800" alt="Gallery 7" />
  <img src="./public/ReadmeImages/Screenshot (47).png" width="800" alt="Gallery 8" />
  <img src="./public/ReadmeImages/Screenshot (48).png" width="800" alt="Gallery 9" />
  <img src="./public/ReadmeImages/Screenshot (49).png" width="800" alt="Gallery 10" />
  <img src="./public/ReadmeImages/Screenshot (50).png" width="800" alt="Gallery 11" />
  <img src="./public/ReadmeImages/Screenshot (51).png" width="800" alt="Gallery 12" />
  <img src="./public/ReadmeImages/Screenshot (52).png" width="800" alt="Gallery 13" />
</div>

