export function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function zeroPad(cases, num) {
  return num.toString().padStart(cases, '0');
}

export function removerAcentos(str) {
  const comAcento =
    'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ';

  const semAcento =
    'AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr';

  let novastr = '';

  for (let i = 0; i < str.length; i++) {
    let troca = false;
    for (let a = 0; a < comAcento.length; a++) {
      if (str.substr(i, 1) === comAcento.substr(a, 1)) {
        novastr += semAcento.substr(a, 1);
        troca = true;
        break;
      }
    }
    if (troca === false) {
      novastr += str.substr(i, 1);
    }
  }
  return novastr;
}
