export default input => {

  // Customize data catalog - Amazon glue logic?
  if (input !== "name of the userw") {
    return [
      {
        message: 'Value at prudential must be equal to "name of the user".',
      },
    ];
  }
};