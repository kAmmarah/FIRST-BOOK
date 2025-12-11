from fastapi import APIRouter
import sys
import os

# Add the parent directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from translation import models, service

router = APIRouter()

@router.post("/", response_model=models.TranslationResponse)
async def translate_text(request: models.TranslationRequest):
    translated_text = service.translate_content(
        text=request.text,
        target_language=request.target_language
    )
    return {"translated_text": translated_text}