import fs from "fs";

export async function getFaqs() {
  const jsonData = fs.readFileSync("@data/available-faqs.json", "utf-8");
  const data = JSON.parse(jsonData);
  console.log(data);

  return {
    props: { data }, // Pass data as props
  };
}
