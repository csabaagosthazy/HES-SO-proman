const url = "https://localhost:44383/api/Methods";

const data = [
  {
    aProject: false,
    rProject: true,
    pProject: false,
    oneDay: false,
    max1Week: true,
    someWeeks: false,
    someMonths: false,
    oneToTenPeople: false,
    tenToThirtyPeople: false,
    thirtyPlusPeople: false,
    information: false,
    consultation: false,
    coDetermination: false,
    inform: false,
    analyse: false,
    discussion: false,
    networking: false,
    plan: false,
    working: false,
    opinions: false,
    conflicts: false,
    suitable: false,
    name: "Test name",
    description: "Test description",
  },
  {
    aProject: false,
    rProject: true,
    pProject: false,
    oneDay: false,
    max1Week: true,
    someWeeks: true,
    someMonths: false,
    oneToTenPeople: false,
    tenToThirtyPeople: false,
    thirtyPlusPeople: false,
    information: false,
    consultation: false,
    coDetermination: false,
    inform: true,
    analyse: false,
    discussion: false,
    networking: false,
    plan: false,
    working: true,
    opinions: false,
    conflicts: false,
    suitable: false,
    name: "Test name2",
    description: "Test description2",
  },
];

export const getData = async () => {
  let result = [];
  try {
    result = await fetch(url).then((response) => response.json());
  } catch (error) {
    console.log("Fetch method failed");
    result = JSON.parse(sessionStorage.getItem("data"));
  }

  return result;
};

export const postData = async (obj) => {
  try {
    await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj), // body data type must match "Content-Type" header
    });
  } catch (error) {
    console.log("Post method failed");
    let storage = JSON.parse(sessionStorage.getItem("data"));
    storage.push(obj);
    sessionStorage.setItem("data", JSON.stringify(storage));
  }

  console.log(data);
};
