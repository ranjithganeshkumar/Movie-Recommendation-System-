from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model import recommend, get_movie_list

app = FastAPI()

# Allow React to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/movies")
def movies():
    return {"movies": get_movie_list()}

@app.get("/recommend/{movie}")
def get_recommendations(movie: str):
    return {"recommendations": recommend(movie)}
