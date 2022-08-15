import MyComponent from '../../../../slices/ImageCards';

export default {
  title: 'slices/ImageCards'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":2200,"height":1200},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9"},"title":[{"type":"paragraph","text":"Proident exercitation sit laborum incididunt commodo culpa do velit ut. Ad proident anim mollit pariatur aliquip cillum Lorem aute cupidatat voluptate amet adipisicing nisi. Sint velit mollit do consectetur aute in in voluptate.","spans":[]}],"text":[{"type":"paragraph","text":"Occaecat minim qui nostrud aute ullamco ea velit qui eiusmod labore cillum.","spans":[]}],"buttonLink":{"link_type":"Web","url":"http://google.com"}}],"primary":{"heading":[{"type":"heading1","text":"Where","spans":[]}]},"slice_type":"image_cards","id":"_Default"}} />
_Default.storyName = ''

export const _ImageCardsWithNoText = () => <MyComponent slice={{"variation":"imageCardsWithNoText","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":2200,"height":1200},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da"},"title":[{"type":"paragraph","text":"Elit incididunt est culpa minim nisi incididunt quis est adipisicing laborum occaecat aute mollit culpa consectetur.","spans":[]}],"buttonLink":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"heading":[{"type":"heading1","text":"Newspaper","spans":[]}]},"slice_type":"image_cards","id":"_ImageCardsWithNoText"}} />
_ImageCardsWithNoText.storyName = ''
