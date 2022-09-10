import MyComponent from '../../../../slices/TextWithImage';

export default {
  title: 'slices/TextWithImage'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"slice_id":"shore","title":[{"type":"heading1","text":"Nearest","spans":[]}],"text":[{"type":"heading1","text":"History","spans":[]},{"type":"paragraph","text":"Amet non tempor eiusmod cupidatat sunt. Do pariatur sunt aliqua qui tempor proident id. Consequat ullamco adipisicing mollit reprehenderit consequat sint mollit.","spans":[]}],"image":{"dimensions":{"width":1000,"height":1200},"alt":null,"copyright":null,"url":"https://images.prismic.io/nextjs-starter-prismic-multi-page/fcb2333d-d2b2-4cdc-acdd-f9558703472d_anders-jilden-Sc5RKXLBjGg-unsplash.jpg"},"buttonlink":{"link_type":"Web","url":"https://prismic.io"},"buttonlabel":"pot"},"slice_type":"text_with_image","id":"_Default"}} />
_Default.storyName = ''

export const _WithButton = () => <MyComponent slice={{"variation":"withButton","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Swing","spans":[]}],"text":[{"type":"paragraph","text":"Ullamco qui aute occaecat mollit dolor proident ullamco velit.","spans":[]}],"buttonLink":{"link_type":"Web","url":"https://prismic.io"},"buttonText":"positive","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055"}},"slice_type":"text_with_image","id":"_WithButton"}} />
_WithButton.storyName = ''
