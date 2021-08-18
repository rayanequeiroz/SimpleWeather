const conversionToCorrect = (location) => {
  if (!location) {
    return '';
  }

  let splitLocation = location;
  if (location.indexOf(' ')) {

    splitLocation = location.split(' ');
    if (splitLocation[1] === "") {
      splitLocation = splitLocation[0];
    }

    const correctLocation = [];
    for (const word of splitLocation) {
      const newWord = word[0].toUpperCase() + word.slice(1);
      correctLocation.push(newWord);
    }
    return correctLocation.join(' ');
  } else {
    return location[0].toUpperCase + location.slice(1);
  }
}

export default conversionToCorrect;
