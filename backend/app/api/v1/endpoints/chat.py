from typing import Any
from fastapi import APIRouter, HTTPException
from app.schemas.chat import ChatRequest, ChatResponse
from openai import OpenAI
import os
import logging

logger = logging.getLogger("castpro.chat")
router = APIRouter()

# OpenAI configuration
openai_api_key = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=openai_api_key)

FISHING_ASSISTANT_PROMPT = """You are an AI fishing assistant. Your job is to:

Explain local fishing regulations clearly.
Give species-specific fishing tips (habits, baits, locations).
Recommend tackle based on species, location, season.
Be friendly, concise, and helpful.

Always provide practical, actionable advice. If asked about specific locations, mention that regulations can vary by state/province and recommend checking local authorities. Keep responses under 200 words unless more detail is specifically requested."""

@router.post("/fishing-assistant", response_model=ChatResponse)
async def chat_with_fishing_assistant(
    chat_request: ChatRequest
) -> Any:
    """
    Chat with the AI fishing assistant (public endpoint).
    """
    logger.info(f"Chat request received: {chat_request.message[:50]}...")
    
    try:
        if not openai_api_key:
            logger.error("OpenAI API key not configured")
            raise HTTPException(
                status_code=500,
                detail="OpenAI API key not configured"
            )

        # Prepare the conversation
        messages = [
            {"role": "system", "content": FISHING_ASSISTANT_PROMPT},
            {"role": "user", "content": chat_request.message}
        ]

        logger.info("Calling OpenAI API...")
        
        # Call OpenAI
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=300,
            temperature=0.7
        )

        ai_response = response.choices[0].message.content
        
        logger.info(f"OpenAI response received: {ai_response[:50]}...")
        return ChatResponse(response=ai_response)

    except Exception as e:
        logger.error(f"Error in chat_with_fishing_assistant: {str(e)}")
        logger.error(f"Request message: {chat_request.message}")
        raise HTTPException(
            status_code=500,
            detail=f"Error communicating with AI assistant: {str(e)}"
        ) 