import FontFaceObserver from "fontfaceobserver"

export default async (font) =>{
  const newFont =  new FontFaceObserver(font)
 await newFont.load().then(()=> return true, ()=> return false)
}
