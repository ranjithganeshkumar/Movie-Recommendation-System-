🎬 Movie Recommendation System

A full-stack Movie Recommendation Web Application built using React (Frontend) and FastAPI (Backend).

This project uses Content-Based Filtering with Cosine Similarity to recommend similar movies based on user selection.

🚀 Features

🔎 Live movie search with dropdown suggestions

🎯 Get recommendations instantly

🧠 Cosine Similarity based recommendation engine

⚡ FastAPI REST API backend

🎨 Modern responsive UI (React + Vite)

📦 Kaggle dataset integration

🧠 Recommendation Algorithm

This project uses Content-Based Filtering.

Steps:

Movie dataset downloaded using:

import kagglehub

path = kagglehub.dataset_download("pythonafroz/movies-recomandation")


Important movie features are combined (genres, keywords, cast, etc.)

Text data is vectorized

Cosine similarity is calculated between movie vectors

Top similar movies are returned

Formula Used:
𝑐
𝑜
𝑠
(
𝜃
)
=
𝐴
⋅
𝐵
∣
∣
𝐴
∣
∣
 
∣
∣
𝐵
∣
∣
cos(θ)=
∣∣A∣∣∣∣B∣∣
A⋅B
	​


Movies with the highest cosine similarity score are recommended.

🛠️ Tech Stack
Frontend

React

Vite

CSS

Backend

FastAPI

Python

Scikit-learn

Pandas

NumPy

📂 Project Structure
Movie-Recommendation-System/
│
├── backend/
│   ├── main.py
│   ├── model.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── Dash.jsx
│   │   └── style.css
│   └── package.json
│
└── README.md

⚙️ Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/your-username/Movie-Recommendation-System.git
cd Movie-Recommendation-System

🖥️ Backend Setup
cd backend
pip install -r requirements.txt
uvicorn main:app --reload


Backend runs on:

http://127.0.0.1:8000


Available APIs:

GET /movies

GET /recommend/{movie_name}

🌐 Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

📌 Example Workflow

User searches for a movie (e.g., Avatar)

User selects movie

Frontend calls:

/recommend/Avatar


Backend computes cosine similarity

Top 5 similar movies returned

Recommendations displayed on UI

⚠ Note

Large model files (.pkl) are not uploaded due to GitHub size limits.
Run the model script locally to regenerate them if needed.

🔮 Future Improvements

🎬 Add movie posters using TMDB API

⭐ Hybrid recommendation system

🌙 Dark mode

🔐 User authentication

☁ Deploy backend & frontend
