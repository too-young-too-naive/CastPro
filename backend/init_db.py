from app.core.database import engine
from app.models import user, item  # Import models to register them
from app.core.database import Base

def init_db():
    """Initialize the database by creating all tables."""
    Base.metadata.create_all(bind=engine)
    print("Database tables created successfully!")

if __name__ == "__main__":
    init_db() 