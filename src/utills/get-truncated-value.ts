
export const getTruncatedValue = (value: string, stringLength: number) => {
  return value.length > stringLength ? value.slice(0,stringLength).concat('...') : value
}