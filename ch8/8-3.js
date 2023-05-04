// < 문장을 함수로 옮기기 >
export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

export function photoDiv(photo) {
  return ["<div>", emitPhotoData(photo), "</div>"].join("\n");
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>title: ${aPhoto.title}</p>`);
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join("\n");
}

function renderPhoto(aPhoto) {
  return "";
}

const result = renderPerson({
  name: "YEBIN",
  photo: {
    title: "yebin_profile",
    location: "./Document/personal_projects/blahblah",
    date: new Date(),
  },
});
console.log(result);

const result2 = photoDiv({
  title: "ellie_profile",
  location: "./Document/personal_projects/blahblah02",
  date: new Date(),
});
console.log(result2);
