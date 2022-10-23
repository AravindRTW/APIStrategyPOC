export default input => {

  // Customize data catalog - Amazon glue logic?
  if (input !== "name of the user") {
    return [
      {
        message: 'Value at prudential must be equal to "name of the user".',
      },
    ];
  }
};