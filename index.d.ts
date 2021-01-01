declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

declare module '*.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
