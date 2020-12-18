/* get courses */
import api from "./base";
import moment from "moment";
const getCourses = (path) =>
  api()
    .get(path)
    .then((x) => {
      let prev = x.data;
      let final = {
        usd: { usd: 1, btc: 0, eth: 0 },
      };

      for (let key in prev) {
        if (key === "bitcoin") {
          final["btc"] = prev[key];
          final.usd.btc = prev[key].usd;
        }
        if (key === "ethereum") {
          final["eth"] = prev[key];
          final.usd.eth = prev[key].usd;
        }
      }

      return final;
    })
    .catch((er) => {
      console.log(er);
      return null;
    });

const getDynamic = async (cr) => {
  const x = await api()
    .get(`coins/${cr}/market_chart?&vs_currency=usd&days=14&interval=daily`)
    .then((x) => x.data)
    .catch((er) => {
      console.log(er, "error with ");
      return null;
    });
  return x.prices.map(([date, price]) => ({
    x: +moment(date).format("DD "),
    y: +price.toFixed(2),
  }));
};
export { getCourses, getDynamic };
