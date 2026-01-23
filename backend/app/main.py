from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from app.routes import quotes, contacts

load_dotenv()

app = FastAPI(title="Shine Bros API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(quotes.router, prefix="/api", tags=["quotes"])
app.include_router(contacts.router, prefix="/api", tags=["contacts"])


@app.get("/")
async def root():
    return {"message": "Shine Bros API is running"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}
