function profilepicture(name, age, profileradius) {
  let name = name;
  let age = age;
  let profileradius = profileradius;

  let calculateCircumference = function () {
    return 2 * Math.PI * this.profileradius;
  };
  const membershipType = ["basics", "premium"];
  const accessLevel = ["limited", "unlimited"];
  if ((membershipType = membershipType[0])) {
    console.log(accessLevel[0]);
  } else if ((membershipType = membershipType[1])) {
    console.log(accessLevel[1]);
  }
  //second task

  const calculateProfilePictureArea = (profileradius) => {
    console.log(Math.PI * Math.pow(this.profileradius, 2));
  };

  //third task

  const createUserProfile = (name, age) => {
    
  };
}
