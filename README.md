# 👑 RoyaleAce – Clash Royale AI Analyzer  

**RoyaleAce** is a next-generation Clash Royale companion app built to take your gameplay to the next level.  
It’s not just another stats tracker — RoyaleAce combines **detailed analytics**, **live leaderboards**, **custom puzzles**, and **personalized recommendations** to give players the ultimate competitive edge.  

Whether you’re a casual player looking to improve or a competitive grinder aiming for the top, RoyaleAce helps you understand your gameplay, optimize your decks, and enjoy Clash Royale in a whole new way.  

---

## ✨ Features  

### 🔍 Player Stats & Search  
- Search your username and instantly pull **every available stat** from the Clash Royale API.  
- Displays trophies, wins, losses, three-crown wins, clan info, favorite card, current deck, and more.  
- Shows both **current season stats** and **lifetime records** for deeper insights.  

### 🤖 Gameplay Analyzer  
- Get personalized recommendations on how to improve your strategy.  
- Analyze playstyle, deck synergy, and weaknesses based on historical match data.  
- Suggests card swaps and deck optimizations for better performance.  

### 🌍 Global Leaderboards  
- **Trophy Leaderboard** – live rankings of the top players worldwide.  
- **Ranked Leaderboard** – track the best medal earners in Clash Royale’s ranked system.  
- Updated automatically with pagination/infinite scroll support.  

### 🧩 Puzzles & Extras  
- Solve custom **Clash Royale puzzles** designed to test game knowledge and decision-making.  
- Challenge yourself with scenario-based questions that simulate in-game situations.  
- Fun mini-games that make RoyaleAce stand out from any other CR tool.  

### ⚡ Modern Design  
- Responsive UI optimized for desktop and mobile.  
- Built with **React, TypeScript, Tailwind CSS, and shadcn-ui** for a sleek, modern experience.  
- Focused on **speed, performance, and accessibility**.  

---

## 🛠️ Development Process  

RoyaleAce was crafted entirely **from scratch** without relying on auto-code generators or AI.  
The journey of development involved:  

1. **Research & Planning**  
   - Reading Clash Royale API docs thoroughly.  
   - Sketching out user flows and UI wireframes.  
   - Deciding feature priorities: stats → recommendations → leaderboards → puzzles.  

2. **Backend Engineering**  
   - Built a **Node.js + Express** backend to handle API requests.  
   - Secured the API key by keeping all requests server-side.  
   - Developed custom routes for:  
     - `/api/player/:username` → full player stats  
     - `/api/leaderboard/trophies` → global trophies leaderboard  
     - `/api/leaderboard/ranked` → ranked medals leaderboard  

3. **Frontend Development**  
   - Created a **React + TypeScript** frontend with clean, component-driven design.  
   - Used **TailwindCSS** and **shadcn-ui** to rapidly build and style components.  
   - Designed responsive cards and tables for stats and leaderboards.  

4. **Testing & Iteration**  
   - Manually tested multiple player tags for accuracy.  
   - Verified leaderboard data against official CR leaderboards.  
   - Fixed edge cases where usernames/tags didn’t resolve properly.  

5. **Extra Features**  
   - Added puzzles and challenges for fun, interactive engagement.  
   - Wrote logic for **personalized recommendations** based on player history.  
   - Optimized API calls to reduce latency and improve performance.  

---

## 🚀 Getting Started  

Follow these steps to run RoyaleAce locally.  

### Prerequisites  
- [Node.js](https://nodejs.org/) (v18+)  
- [npm](https://www.npmjs.com/)  

### Installation  

```sh
# Clone the repo
git clone <YOUR_GIT_URL>
cd royaleace

# Install dependencies
npm install

# Start development server
npm run dev
