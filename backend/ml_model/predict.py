import os
import joblib
import numpy as np
from django.conf import settings

def predict_disease(symptoms):
    BASE_DIR = settings.BASE_DIR
    
    model_path = os.path.join(BASE_DIR, 'disease_model.joblib')
    feature_names_path = os.path.join(BASE_DIR, 'feature_names.joblib')
    
    model = joblib.load(model_path)
    feature_names = joblib.load(feature_names_path)
    
    feature_vector = np.zeros(len(feature_names))
    
    recognized_symptoms = []
    unrecognized_symptoms = []
    
    for symptom in symptoms:
        symptom = symptom.lower()  # Convert to lowercase for case-insensitive matching
        if symptom in feature_names:
            feature_vector[feature_names.index(symptom)] = 1
            recognized_symptoms.append(symptom)
        else:
            unrecognized_symptoms.append(symptom)
    
    if len(recognized_symptoms) == 0:
        return {
            "prediction": "Unable to make a prediction",
            "reason": "No recognized symptoms provided",
            "unrecognized_symptoms": unrecognized_symptoms
        }
    
    prediction = model.predict([feature_vector])[0]
    
    result = {
        "prediction": prediction,
        "recognized_symptoms": recognized_symptoms,
    }
    
    if unrecognized_symptoms:
        result["unrecognized_symptoms"] = unrecognized_symptoms
    
    return result