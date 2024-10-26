
import fitz

def process_pdf(file_path):
    with fitz.open(file_path) as pdf:
        text = ""
        for page in pdf:
            text += page.get_text()
    return text
