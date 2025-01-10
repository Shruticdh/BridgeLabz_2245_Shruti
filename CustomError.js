// class CustomError extends Error {
//     constructor(message, errorCode) {
//       super(message); 
//       this.name = "CustomError"; 
//       this.errorCode = errorCode;
//     }
//   }
  
//   try {
//     throw new CustomError("Something went wrong!", 1001);
//   } catch (error) {
//     if (error instanceof CustomError) {
//       console.log(`Error: ${error.message}, Code: ${error.errorCode}`);
//     } else {
//       console.log(`Unexpected error: ${error.message}`);
//     }
//   }


  // Custom Error Function
function createCustomError(message, errorCode) {
    const error = new Error(message);
    error.name = "CustomError"; 
    error.errorCode = errorCode; 
    return error;
  }
  
  function processTask(task) {
    if (task === "fail") {
      throw createCustomError("Task failed!", 1001); 
    } else {
      return "Task completed successfully!";
    }
  }
  
  try {
    console.log(processTask("fail"));
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error: ${error.message}, Code: ${error.errorCode}`);
    }
  }
  
  