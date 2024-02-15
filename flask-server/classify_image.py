from tensorflow.keras.models import load_model
import tensorflow as tf
import numpy as np
from PIL import Image

MODEL_PATH = "./model"

class classify_image:
    
    def __init__(self, image):
        self.model = load_model(MODEL_PATH)
        self.image = self.format_image(image)
        self.class_names = ['Daisy','Dandelion','Lavender','Lilly','Lotus','Orchid','Rose','Sunflower','Tulip','Other']
        
        
    def predict(self):
        prediction = self.model.predict(self.image)
        predicted_class = np.argmax(prediction)
        self.prediction = self.class_names[predicted_class]
        self.confidence = self.calculate_confidence(prediction[0])
        
    def get_confidence(self):
        return self.confidence 
    
    def get_prediction(self):
        return self.prediction
    
    def format_image(self, img):
        img = Image.open(img)
        img = img.convert('RGB')
        img = np.array(img)
        img = np.expand_dims(img, axis=0)
        img = tf.image.resize(img, (180, 180))
        return img
    
    def calculate_confidence(self, logits):
        confidences = self.softmax(logits)
        confidence = np.max(confidences)
        
        confidence_as_precent = confidence * 100
        return confidence_as_precent

    def softmax(self, logits):
        e = np.exp(logits - np.max(logits))  # subtract max to avoid numerical instability
        return e / e.sum(axis=0)