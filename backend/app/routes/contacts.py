from fastapi import APIRouter

from app.schemas import ContactRequest, ContactResponse
from app.services.email import send_contact_email

router = APIRouter()


@router.post("/contacts", response_model=ContactResponse)
async def submit_contact(request: ContactRequest):
    """Submit a contact form message."""
    try:
        email_success = await send_contact_email(
            name=request.name,
            email=request.email,
            message=request.message
        )

        return ContactResponse(
            success=True,
            message="Message sent successfully!"
        )
    except Exception as e:
        print(f"Error in contact submission: {e}")
        return ContactResponse(
            success=False,
            message="Failed to send message. Please try again."
        )
