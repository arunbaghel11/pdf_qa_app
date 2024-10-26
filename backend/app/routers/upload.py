
from fastapi import APIRouter, UploadFile, File
from ..services.pdf_processing import process_pdf
import shutil

router = APIRouter()

@router.post("/upload/")
async def upload_pdf(file: UploadFile = File(...)):
    file_location = f"files/{file.filename}"
    with open(file_location, "wb") as f:
        shutil.copyfileobj(file.file, f)
    
    text_content = process_pdf(file_location)
    return {"filename": file.filename}
