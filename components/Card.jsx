const Card = () => {
  return (
    <div className="m-10 p-6 max-w-5xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          English 101
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        quae dicta placeat in adipisci animi recusandae similique ipsum facilis,
        minima nobis deleniti repellendus, distinctio consequuntur inventore
        molestiae neque aperiam ab accusantium voluptate fuga eum, dignissimos
        impedit. Accusamus hic pariatur tenetur distinctio praesentium vitae
        doloremque nobis et neque omnis corrupti iusto perspiciatis debitis
        quaerat nemo quo quae, minima ipsum nam est ut quidem eius itaque
        corporis? In nisi sapiente iste minima inventore. Modi consequatur
        expedita placeat, sapiente accusantium deleniti distinctio. Consequuntur
        nisi neque praesentium accusamus, quidem ea, sapiente, a quibusdam
        necessitatibus quam dignissimos culpa consectetur? Facere dolores quae
        delectus iure quia?
      </p>
      <a
        href="#"
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Take This Course
        <svg
          className="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Card;
