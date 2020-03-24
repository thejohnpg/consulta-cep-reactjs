export const cepMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{5})(\d)/, '$1-$2') // adiciona "-" depois do 5º Número
  }