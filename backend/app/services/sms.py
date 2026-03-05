import os
from twilio.rest import Client
from dotenv import load_dotenv

load_dotenv()


def send_contact_sms(name: str, email: str, message: str) -> bool:
    """Send contact form details as an SMS via Twilio."""
    account_sid = os.getenv("TWILIO_ACCOUNT_SID")
    auth_token = os.getenv("TWILIO_AUTH_TOKEN")
    from_number = os.getenv("TWILIO_PHONE_NUMBER")
    to_number = os.getenv("MY_PHONE_NUMBER")

    if not all([account_sid, auth_token, from_number, to_number]):
        print("Twilio not configured — skipping SMS")
        return False

    try:
        client = Client(account_sid, auth_token)
        body = (
            f"New Contact Form Submission\n"
            f"Name: {name}\n"
            f"Email: {email}\n"
            f"Message: {message}"
        )
        client.messages.create(body=body, from_=from_number, to=to_number)
        print("SMS sent successfully")
        return True
    except Exception as e:
        print(f"Error sending SMS: {e}")
        return False
