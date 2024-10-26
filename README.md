
# PDF Q&A Application

## Setup Instructions

1. Clone the repository.
2. Set up PostgreSQL and add the connection URL to `.env`.
3. Install backend dependencies:
    ```bash
    pip install -r backend/requirements.txt
    ```
4. Start the backend server:
    ```bash
    uvicorn app.main:app --reload
    ```
5. Install frontend dependencies:
    ```bash
    npm install
    ```
6. Start the frontend server:
    ```bash
    npm start
    ```
