import MyComponent from '../../../../slices/TextWithImage';

export default {
  title: 'slices/TextWithImage'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Prize","spans":[]}],"text":[{"type":"heading1","text":"Below","spans":[]},{"type":"paragraph","text":"Minim ullamco duis nostrud aliquip dolore voluptate. Amet irure excepteur ex sint laboris cillum ad. Occaecat eiusmod cupidatat cupidatat.","spans":[]}],"image":{"dimensions":{"width":1000,"height":1200},"alt":null,"copyright":null,"url":"https://images.prismic.io/nextjs-starter-prismic-multi-page/fcb2333d-d2b2-4cdc-acdd-f9558703472d_anders-jilden-Sc5RKXLBjGg-unsplash.jpg"}},"slice_type":"text_with_image","id":"_Default"}} />
_Default.storyName = ''

export const _WithButton = () => <MyComponent slice={{"variation":"withButton","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Occur","spans":[]}],"text":[{"type":"paragraph","text":"Consectetur laboris dolore cillum ullamco non laboris veniam. Esse nostrud enim aliquip nisi laboris qui ipsum est cupidatat eu dolor.","spans":[]}],"buttonLink":{"link_type":"Web","url":"http://twitter.com"},"buttonText":"sudden","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b"}},"slice_type":"text_with_image","id":"_WithButton"}} />
_WithButton.storyName = ''
