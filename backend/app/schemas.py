from pydantic import BaseModel, EmailStr
from typing import Optional, List


class QuoteRequest(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    location: str
    service_type: str
    message: Optional[str] = None


class QuoteResponse(BaseModel):
    success: bool
    message: str


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str
