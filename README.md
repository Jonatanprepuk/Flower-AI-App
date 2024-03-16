# Flower Recognition App

This project is a Flower Recognition App that uses a Flask server for the backend, a React.js client for the frontend, and a machine learning model for flower recognition.

## Project Structure

The project is divided into two main parts:

- `flask-server`: This directory contains the Flask server that serves as the backend for the application.
- `client`: This directory contains the React.js client that serves as the frontend for the application.

## Setup

### Backend

1. Navigate to the `flask-server` directory.
2. Create a virtual environment: `python3 -m venv venv`
3. Activate the virtual environment: `source venv/bin/activate`
4. Install the required packages: `pip install -r requirements.txt`
5. Run the server: `python app.py`

### Frontend

1. Navigate to the `client` directory.
2. Install the required packages: `npm install`
3. Start the client: `npm start`

## Usage

Upload an image of a flower using the file uploader. The app will predict the type of the flower and display the prediction.
