import { readFile, writeFile } from "fs/promises";

const exec = async () => {
  const fileContent = await readFile('./teste.txt', {encoding:'utf8'});
  console.log(fileContent)
  
  const list = fileContent.split("\n")
  list.push('Maria');

  const listTxt = list.join("\n");
  await writeFile('./teste.txt', listTxt);
}
 
exec();