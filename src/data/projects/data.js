import Plant from "./plant.webp";
import Diabilites from "./diabilites.webp";
import House from "./house.webp";
export const Profiledata = [
  {
    id: 1,
    url: Plant,
    title: "Leveraging Deep Learning for Intelligent Plant Disease Prediction",
    github:
      "https://github.com/ADongol123/plant_disease_classifier_application",
    medium:
      "https://medium.com/@ayussh222dongol/leveraging-deep-learning-for-intelligent-plant-disease-prediction-building-a-cnn-based-system-with-0f2f0a093dbf",
    description:
      "Uses a Convolutional Neural Network (CNN) trained on the PlantVillage dataset, achieving +92% accuracy in identifying plant diseases.Implements transfer learning, boosting classification accuracy by 15% compared to traditional models. <br/> Integrated an NLP-based chatbot using transformers, providing real-time guidance on disease prevention and treatment. Reduces user query resolution time by 30%, making plant health management more efficient. <br/> Fine-tuned hyperparameters and data augmentation techniques improve model generalization by 20%. Reduces false positive rates in disease detection, ensuring more reliable results. <br/> Backend powered by FastAPI, ensuring 50% faster request processing. Frontend built with React.js, allowing for real-time disease detection with a smooth user experience. <br/> Supports multi-class disease classification, enabling detection of various plant diseases in seconds. Helps farmers and researchers improve early disease detection, reducing potential crop loss by 25%.",
  },

  {
    id: 2,
    url: Diabilites,
    title: "Neural Network-Based Diabetes Prediction",
    description:
      "Uses a Neural Network trained on a diabetes dataset, achieving +85% accuracy in predicting diabetes risk. Implements feature engineering and data preprocessing to enhance model performance and reduce bias. <br/> Integrated data visualization techniques using Matplotlib, providing insights into feature correlations and disease trends. Improves interpretability by 20%, making predictions more transparent. <br/> Fine-tuned hyperparameters and optimized loss functions to minimize classification errors, ensuring higher reliability. <br/> Backend powered by FastAPI, enabling real-time predictions with 40% faster response time. Frontend built with React.js for a seamless user experience. <br/> Supports early diabetes detection, helping healthcare professionals and individuals take preventive measures to reduce health risks by 30%.",
    github: "https://github.com/ADongol123/diabities_prediction_model",
    medium: null,
  },
  {
    id: 3,
    url: House,
    title: "Forecasting Housing Market Trends with AI",
    github: "https://github.com/ADongol123/House_pricing_model",
    medium: null,
    description:
      "Uses a regression model trained on the housing dataset, achieving high accuracy in predicting property prices based on factors like location, size, and amenities. Implements feature engineering techniques, boosting prediction accuracy by 10% compared to traditional models. <br/> Fine-tuned hyperparameters and used data normalization to improve model generalization, enhancing the accuracy of price predictions across different market conditions. <br/> Backend powered by Flask, ensuring quick response times for price predictions. Frontend built with React.js, providing an intuitive interface for users to input property details and view estimated prices. <br/> Supports detailed visualizations using Matplotlib, enabling users to analyze key factors affecting house prices. Helps home buyers, sellers, and real estate agents make informed decisions, reducing over- or underpricing by up to 20%.",
  },
];
