import os
from datetime import datetime
from typing import List, Optional
import httpx
from dotenv import load_dotenv

load_dotenv()


def get_email_config():
    return {
        "public_key": os.getenv("EMAILJS_PUBLIC_KEY"),
        "private_key": os.getenv("EMAILJS_PRIVATE_KEY"),
        "service_id": os.getenv("EMAILJS_SERVICE_ID"),
        "template_id": os.getenv("EMAILJS_TEMPLATE_ID"),
        "recipient": os.getenv("RECIPIENT_EMAIL")
    }


SERVICE_LABELS = {
    "exterior": "Exterior Window Washing",
    "interior": "Interior Window Washing",
    "both": "Interior & Exterior Window Washing",
    "pressure": "Pressure Washing"
}


async def send_quote_email(
    first_name: str,
    last_name: str,
    email: str,
    location: str,
    service_type: str,
    message: Optional[str],
    image_urls: List[str]
) -> bool:
    """Send quote notification email via EmailJS."""
    config = get_email_config()
    if not all([config["public_key"], config["service_id"], config["template_id"]]):
        print("EmailJS not configured")
        return False

    try:
        service_label = SERVICE_LABELS.get(service_type, service_type)

        # Build message content
        email_message = f"""
New Quote Request

Name: {first_name} {last_name}
Email: {email}
Location: {location}
Service: {service_label}
Message: {message or 'No additional details provided'}
"""

        if image_urls:
            email_message += "\nImages:\n"
            for i, url in enumerate(image_urls, 1):
                email_message += f"{i}. {url}\n"

        # EmailJS API payload
        payload = {
            "service_id": config["service_id"],
            "template_id": config["template_id"],
            "user_id": config["public_key"],
            "accessToken": config["private_key"],
            "template_params": {
                "title": "New Quote Request",
                "name": f"{first_name} {last_name}",
                "message": email_message,
                "email": config["recipient"],
                "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
        }

        print(f"Sending email with payload: {payload}")
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.emailjs.com/api/v1.0/email/send",
                json=payload,
                headers={"Content-Type": "application/json"}
            )
            print(f"EmailJS response: {response.status_code} - {response.text}")
            return response.status_code == 200
    except Exception as e:
        print(f"Error sending quote email: {e}")
        import traceback
        traceback.print_exc()
        return False


async def send_contact_email(
    name: str,
    email: str,
    message: str
) -> bool:
    """Send contact form notification email via EmailJS."""
    config = get_email_config()
    if not all([config["public_key"], config["service_id"], config["template_id"]]):
        print("EmailJS not configured")
        return False

    try:
        email_message = f"""
New Contact Message

From: {name}
Email: {email}

Message:
{message}
"""

        payload = {
            "service_id": config["service_id"],
            "template_id": config["template_id"],
            "user_id": config["public_key"],
            "accessToken": config["private_key"],
            "template_params": {
                "title": "New Contact Message",
                "name": name,
                "message": email_message,
                "email": email,
                "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
        }

        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.emailjs.com/api/v1.0/email/send",
                json=payload,
                headers={"Content-Type": "application/json"}
            )
            return response.status_code == 200
    except Exception as e:
        print(f"Error sending contact email: {e}")
        return False
