import uvicorn
import logging
from main import app
from app.core.config import setup_logging

if __name__ == "__main__":
    # Setup logging
    logger = setup_logging()
    logger.info("Starting CastPro backend server...")
    
    try:
        uvicorn.run(
            "main:app",
            host="0.0.0.0",
            port=8000,
            reload=True,
            log_level="info",
            access_log=True
        )
    except Exception as e:
        logger.error(f"Failed to start server: {e}")
        raise 