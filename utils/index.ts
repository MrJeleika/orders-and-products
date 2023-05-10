

/* 
Base usage: titles should contain 3 strings 
1 - word form if last digit one 
2 - word form if last digit two - four
3 - word form if last digit five - zero
*Example: formatWordCount(5, ['Продукт', 'Продукта', 'Продуктов']) will return 'Продуктов'
cos last digit of number is between 5 and 10
*/
export const formatWordCount = (n: number, titles: string[]): string => {
  return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
}