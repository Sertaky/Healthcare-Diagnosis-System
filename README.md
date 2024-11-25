# Healthcare Diagnosis System

The **Healthcare Diagnosis System** is a comprehensive AI-powered web application designed to assist healthcare professionals in diagnosing six critical health conditions. By integrating state-of-the-art machine learning and deep learning models, the system provides accurate and efficient predictions to improve medical decision-making and patient care.

---

## **Features**

1. **Multi-Disease Diagnosis**:
   - Supports predictions for six conditions:
     - Breast Cancer
     - Chronic Kidney Disease (CKD)
     - Diabetes
     - Heart Disease
     - Liver Disease
     - Pneumonia and Malaria (image-based diagnosis)

2. **AI-Powered Models**:
   - Utilizes tailored machine learning models for structured clinical data.
   - Employs deep learning models for medical image analysis (e.g., X-rays, blood smear images).

3. **User-Friendly Interface**:
   - Angular-based frontend for seamless interaction.
   - Provides real-time predictions and actionable insights.

4. **Scalable Backend**:
   - Flask-based RESTful API for processing patient data and serving model predictions.
   - Modular and extensible architecture to accommodate future models.

---

## **Technologies Used**

- **Frontend**: Angular
- **Backend**: Flask
- **Machine Learning Frameworks**: 
  - scikit-learn (Logistic Regression, Random Forests, XGBoost)
  - TensorFlow (Deep Learning)
- **Deployment**:
  - Docker containerization for scalable deployment.
  - Cloud hosting or local servers.

---

## **Machine Learning Models**

### 1. **Breast Cancer Prediction**
   - **Description**: Classifies tumors as malignant or benign based on clinical measurements.
   - **Model**: Random Forest / Logistic Regression.
   - **Accuracy**: 98.24%.

### 2. **Chronic Kidney Disease Classification**
   - **Description**: Detects CKD using biomarkers such as creatinine and glucose levels.
   - **Model**: Decision Tree Classifier.
   - **Purpose**: Early detection to enable timely treatment.

### 3. **Diabetes Prediction**
   - **Description**: Predicts diabetes risk based on clinical data like BMI and glucose levels.
   - **Model**: Logistic Regression / Support Vector Machine.

### 4. **Heart Disease Prediction**
   - **Description**: Identifies heart disease risk based on factors like cholesterol levels and blood pressure.
   - **Model**: Ensemble classifiers for robust predictions.

### 5. **Liver Disease Classification**
   - **Description**: Classifies liver diseases using XGBoost with hyperparameter tuning.
   - **Model**: XGBoost.
   - **Accuracy**: 85%.

### 6. **Pneumonia and Malaria Detection**
   - **Description**: Analyzes X-ray images for pneumonia and blood smear images for malaria detection.
   - **Model**: Convolutional Neural Networks (CNNs).
   - **Framework**: TensorFlow.

---



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## **Setup and Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sertaky/Healthcare-Diagnosis-System.git

2. **Navigate to the Project Directory:

cd Healthcare-Diagnosis-System


3. **Install Backend Dependencies:

pip install -r requirements.txt

4. Install Frontend Dependencies:

npm install

5. **Run the Backend Server:

python app.py

6. **Run the Frontend:

ng serve or ng s -o
The application will be accessible at http://localhost:4200/.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
