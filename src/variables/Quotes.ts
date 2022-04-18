export const kanyeMessage = async () => {
  const response = await fetch(`https://api.kanye.rest`);
  if (!response.ok) {
    console.log("not working");
    return "Kanye API is not working";
  }
  const data = await response.json();
  console.log(data.quote);

  let string;
  string = data.quote.toString();
  return string;
};
