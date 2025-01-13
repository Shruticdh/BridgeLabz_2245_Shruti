class CustomError extends Error {
    constructor(message, customProperty) {
      super(message);
      this.name = this.constructor.name; 
      this.customProperty = customProperty;
    //   Error.captureStackTrace(this, this.constructor); // Optional: Ensure the stack trace is clean
    }
  }

  try {
    throw new CustomError("Something went wrong!", 42);
  } catch (error) {
    console.error(error.name); 
    console.error(error.message);
    console.error(error.customProperty);
    // console.error(error.stack);
  }
  