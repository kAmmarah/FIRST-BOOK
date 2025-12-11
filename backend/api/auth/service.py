from sqlalchemy.orm import Session
import sys
import os
from dotenv import load_dotenv

# Add the parent directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from auth import models
from database.models import User

load_dotenv()

# Initialize BetterAuth client
# For now, we'll use a placeholder since the exact API structure is different
# auth = BetterAuth(
#     secret=os.getenv("BETTER_AUTH_SECRET", "fallback-secret-key"),
#     database_url=os.getenv("DATABASE_URL", "sqlite:///./test.db"),
#     email_verification=False,  # Set to True in production
# )
auth = None  # Placeholder until we implement the correct API usage

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def create_user_with_profile(db: Session, user: models.UserCreate):
    # For now, we'll create a simple user without BetterAuth integration
    # This is a temporary solution until we implement the correct API usage
    
    # Create user profile in our database
    db_user = User(
        email=user.email,
        hashed_password="temp_hashed_password",  # Placeholder
        software_experience=user.software_experience,
        hardware_experience=user.hardware_experience,
        learning_style=user.learning_style
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def authenticate_user_with_better_auth(email: str, password: str):
    # For now, we'll return a placeholder since we don't have BetterAuth integration
    # This is a temporary solution until we implement the correct API usage
    print(f"Authentication attempt for {email}")
    # In a real implementation, we would authenticate with BetterAuth here
    return {"email": email}  # Placeholder