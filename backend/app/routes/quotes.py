from fastapi import APIRouter, Form
from typing import Optional

from app.schemas import QuoteResponse
from app.services.supabase import save_quote
from app.services.email import send_quote_email

router = APIRouter()


@router.post("/quotes", response_model=QuoteResponse)
async def submit_quote(
    first_name: str = Form(...),
    last_name: str = Form(...),
    email: str = Form(...),
    location: str = Form(...),
    zipcode: str = Form(...),
    service_type: str = Form(...),
    message: Optional[str] = Form(None),
):
    """Submit a quote request."""
    try:
        # Save to database and send email
        db_success = await save_quote(
            first_name=first_name,
            last_name=last_name,
            email=email,
            location=location,
            zipcode=zipcode,
            service_type=service_type,
            message=message,
        )

        email_success = await send_quote_email(
            first_name=first_name,
            last_name=last_name,
            email=email,
            location=location,
            zipcode=zipcode,
            service_type=service_type,
            message=message,
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
