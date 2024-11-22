
import React, { useState } from 'react';
import Modal from 'react-modal';

// Configurez le point d'attache pour la modal
Modal.setAppElement('#root');

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour contrôler l'ouverture de la modal
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true); // Ouvrir la modal de confirmation
  };

  const confirmSubmit = async () => {
    // Utilisez la clé d'accès à partir des variables d'environnement
    const accessKey = process.env.REACT_APP_ACCESS_KEY;

    if (!accessKey) {
      console.error("Access key is not defined. Check your .env file.");
      return;
    }

    const json = JSON.stringify({ ...formData, access_key: accessKey });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      setSuccessMessage("Votre message a bien été transmis.");
      setErrorMessage(""); // Réinitialiser le message d'erreur
      setFormData({ name: "", email: "", message: "" }); // Réinitialiser le formulaire
    } else {
      console.error(result);
      setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
      setSuccessMessage(""); // Réinitialiser le message de succès
    }

    setIsModalOpen(false); // Fermer la modal après soumission
  };

  const cancelSubmit = () => {
    setIsModalOpen(false); // Fermer la modal si l'utilisateur annule
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-12 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-2xl w-full h-full bg-white dark:bg-gray-900 shadow-xl rounded-lg p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Formulaire de contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nom
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Entrez votre nom"
              required
              onChange={handleChange}
              className="shadow-md appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-3 px-4 text-gray-900 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-white" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Entrez votre email"
              required
              onChange={handleChange}
              className="shadow-md appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-3 px-4 text-gray-900 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-white" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Votre message
            </label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Entrez votre message"
              required
              onChange={handleChange}
              className="shadow-md appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-3 px-4 text-gray-900 dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-white h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-gray-800 dark:bg-blue-800 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Envoyer le formulaire
          </button>
        </form>
        {successMessage && (
          <div className="mt-4 text-center text-green-600">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 text-center text-red-600">
            {errorMessage}
          </div>
        )}
      </div>

      {/* Modal de confirmation */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={cancelSubmit}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mt-20 text-gray-900" // Texte noir dans la modal
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h2 className="text-lg font-bold mb-4">Confirmer l'envoi</h2>
        <p>Voulez-vous confirmer l'envoi de ce formulaire ?</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={cancelSubmit}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Annuler
          </button>
          <button
            onClick={confirmSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Confirmer
          </button>
        </div>
      </Modal>
    </div>
  );
}
