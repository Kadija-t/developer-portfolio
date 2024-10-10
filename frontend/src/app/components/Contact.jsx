export default function Contact() {
    async function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      // Utilisez la clé d'accès à partir des variables d'environnement
      const accessKey = process.env.REACT_APP_ACCESS_KEY;
  
      // Vérifiez si accessKey est défini
      if (!accessKey) {
        console.error("Access key is not defined. Check your .env file.");
        return;
      }
  
      formData.append("access_key", accessKey); // Ajoutez votre clé ici
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
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
        console.log(result);
        // Vous pouvez afficher un message de succès ou réinitialiser le formulaire ici
      } else {
        console.error(result); // Affichez l'erreur
      }
    }
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Contactez-nous</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
               Nom
              </label>
              <input
                type="text"
                name="name"
                placeholder="Entrez votre nom"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="Entrez votre email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Votre message
              </label>
              <textarea
                name="message"
                placeholder="Entrez votre message"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Envoyer le formulaire
            </button>
          </form>
        </div>
      </div>
    );
  }
  