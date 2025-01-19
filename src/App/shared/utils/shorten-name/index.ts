const shortenName = (text: string): string => {
  text = text.trim()

  if (text.includes(' ')) {
    text = text.split(' ').map((item) => item[0]).join('')
  }

  return text.slice(0, 2).concat('...')
}

export {
  shortenName
}
