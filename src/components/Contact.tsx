const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-transparent dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center dark:text-white">Contácto</h2>
        <div className="max-w-lg mx-auto">
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md dark:bg-gray-800">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="name">
                Nombre
              </label>
              <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none dark:text-white dark:bg-gray-700 focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Tu nombre" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                Email
              </label>
              <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none dark:text-white dark:bg-gray-700 focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="tu@email.com" />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="message">
                Mensaje
              </label>
              <textarea className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none dark:text-white dark:bg-gray-700 focus:outline-none focus:shadow-outline" id="message" placeholder="Tu mensaje" rows={4}></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;