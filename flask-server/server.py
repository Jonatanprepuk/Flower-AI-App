from flask import Flask, request, jsonify
from flask_cors import CORS
from classify_image import classify_image
import os

from io import BytesIO

app = Flask(__name__)
CORS(app) # Gör det möjligt för din React-app att kommunicera med Flask-servern

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'message': 'Ingen fil del i förfrågan'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'Ingen fil vald för uppladdning'}), 400
    if file:
        model = classify_image(file)
        model.predict()
        
        print(jsonify({'prediction': model.get_prediction()
                       ,'confidence': model.get_confidence()})) 
        
        return jsonify({'prediction': model.get_prediction()
                        ,'confidence': model.get_confidence()}), 200 

if __name__ == '__main__':
    app.run(debug=True)
