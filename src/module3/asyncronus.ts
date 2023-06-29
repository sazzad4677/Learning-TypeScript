const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data = "data is fetched from the server";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data from the server");
    }
  });
};

const result4 = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};
