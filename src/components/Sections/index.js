import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'

export default [
  {
    id: 'contact', 
    heading: 'My name is Robert Kerr', 
    bgColor: '#191e2b', 
    textColor: '#dfdfdf',
    highlightColor: 'hsl(42,100%,95%)',
    content: Section1
  },
  {
    id: 'neuroscience', 
    heading: 'I am a computational neuroscientist', 
    bgColor: '#1d2121', //'hsl(236,10%,15%)', //'#070b15', 
    textColor: '#dfdfdf',
    highlightColor: '#9cf29c',
    content: Section2
  },
  {
    id: 'web', 
    heading: 'And more recently a web developer', 
    bgColor: '#041a1a', 
    textColor: '#dfdfdf',
    highlightColor: '#d9db7b',
    content: Section3
  },
  {
    id: 'learning', 
    heading: 'I enjoy learning new things', 
    bgColor: '#151019', 
    textColor: '#dfdfdf',
    highlightColor: '#fff0f9',
    content: Section4
  }
  // ,{
  //   id: 'people', 
  //   heading: 'And working with good people', 
  //   bgColor: '#192334',// '#18292c', 
  //   textColor: '#dfdfdf',
  //   highlightColor: '#fcfa61',
  //   content: Section5
  // }
]
