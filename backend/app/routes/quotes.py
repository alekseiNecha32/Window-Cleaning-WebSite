from fastapi import APIRouter, UploadFile, File, Form
from typing import List, Optional

from app.schemas import QuoteResponse
from app.services.supabase import upload_image, save_quote
from app.services.email import send_quote_email

router = APIRouter()


@router.post("/quotes", response_model=QuoteResponse)
async def submit_quote(
    first_name: str = Form(...),
    last_name: str = Form(...),
    email: str = Form(...),
    location: str = Form(...),
    service_type: str = Form(...),
    message: Optional[str] = Form(None),
    images: List[UploadFile] = File(default=[])
):
    """Submit a quote request with optional images."""
    try:
        # Upload images if provided
        image_urls = []
        for image in images[:3]:  # Limit to 3 images
            if image.filename:
                content = await image.read()
                url = await upload_image(content, image.filename)
                if url:
                    image_urls.append(url)

        # Save to database and send email in parallel
        db_success = await save_quote(
            first_name=first_name,
            last_name=last_name,
            email=email,
            location=location,
            service_type=service_type,
            message=message,
            image_urls=image_urls
        )

        email_success = await send_quote_email(
            first_name=first_name,
            last_name=last_name,
            email=email,
            location=location,
            service_type=service_type,
            message=message,
            image_urls=image_urls
        )

        return QuoteResponse(
            success=True,
            message="Quote request submitted successfully!"
        )
    except Exception as e:
        print(f"Error in quote submission: {e}")
        return QuoteResponse(
            success=False,
            message="Failed to submit quote request. Please try again."
        )
