const axios = require("axios");

module.exports = async () => {
  const res = await axios.get("https://haveibeenpwned.com/api/v3/breaches");
  return res.data.sort(
    (a, b) => Date.parse(b.AddedDate) - Date.parse(a.AddedDate)
  );
};
