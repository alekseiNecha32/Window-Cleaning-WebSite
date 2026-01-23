import os
import uuid
from datetime import datetime
from typing import List, Optional
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

_supabase: Optional[Client] = None


def get_supabase() -> Optional[Client]:
    global _supabase
    if _supabase is None:
        url = os.getenv("SUPABASE_URL")
        key = os.getenv("SUPABASE_ANON_KEY")
        if url and key:
            _supabase = create_client(url, key)
    return _supabase


async def upload_image(file_content: bytes, filename: str) -> Optional[str]:
    """Upload image to Supabase storage and return public URL."""
    supabase = get_supabase()
    if not supabase:
        print("Supabase not configured")
        return None

    try:
        # Generate unique filename
        ext = filename.split(".")[-1] if "." in filename else "jpg"
        unique_name = f"quote_{int(datetime.now().timestamp())}_{uuid.uuid4().hex[:8]}.{ext}"

        # Upload to storage
        result = supabase.storage.from_("quote-images").upload(
            unique_name,
            file_content,
            {"content-type": f"image/{ext}"}
        )

        # Get public URL
        public_url = supabase.storage.from_("quote-images").get_public_url(unique_name)
        return public_url
    except Exception as e:
        print(f"Error uploading image: {e}")
        return None


async def save_quote(
    first_name: str,
    last_name: str,
    email: str,
    location: str,
    service_type: str,
    message: Optional[str],
    image_urls: List[str]
) -> bool:
    """Save quote to Supabase database."""
    supabase = get_supabase()
    if not supabase:
        print("Supabase not configured")
        return False

    try:
        data = {
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "location": location,
            "service_type": service_type,
            "message": message,
            "image_urls": image_urls
        }

        print(f"Attempting to save quote: {data}")
        result = supabase.table("quotes").insert(data).execute()
        print(f"Supabase result: {result}")
        return True
    except Exception as e:
        print(f"Error saving quote: {e}")
        import traceback
        traceback.print_exc()
        return False
