
from langchain.llama import LlamaIndex

def get_answer(document_id, question):
    document_text = get_document_text(document_id)
    index = LlamaIndex([document_text])
    response = index.query(question)
    return response
