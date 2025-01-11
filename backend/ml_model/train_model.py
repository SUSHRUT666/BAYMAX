import os
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import MultiLabelBinarizer
import joblib
from django.conf import settings

def train_model():
    # Get the base directory of the Django project
    BASE_DIR = settings.BASE_DIR
    
    # Load and preprocess the data
    csv_path = os.path.join(BASE_DIR,'data', 'Training.csv')
    data = pd.read_csv(csv_path)
    
    # Separate features and target
    X = data.drop('prognosis', axis=1)
    y = data['prognosis']
    
    # Split the data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=4962)
    
    # Train the model
    clf = RandomForestClassifier(n_estimators=100, random_state=4962)
    clf.fit(X_train, y_train)
    
    # Save the model
    model_path = os.path.join(BASE_DIR, 'disease_model.joblib')
    joblib.dump(clf, model_path)
    
    # Save the feature names
    feature_names_path = os.path.join(BASE_DIR, 'feature_names.joblib')
    joblib.dump(X.columns.tolist(), feature_names_path)

if __name__ == '__main__':
    import django
    import sys
    import os
    
    # Add the project root directory to the Python path
    project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    sys.path.append(project_root)
    
    # Set up Django environment
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
    django.setup()
    
    train_model()

