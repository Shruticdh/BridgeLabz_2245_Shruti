const user = {
    isAdmin: true,
    isActive: false,
    isVerified: true,
  };
  

  function checkUserState(user) {
    if (user.isAdmin) {
      console.log("The user has admin privileges.");
    }
  
    if (user.isActive) {
      console.log("The user account is active.");
    } else {
      console.log("The user account is inactive.");
    }
  
    if (user.isVerified) {
      console.log("The user account is verified.");
    } else {
      console.log("The user account is not verified.");
    }
  }
  
  checkUserState(user);
  