// no React here but that doesn't change things: 
//
// export default class SomeComponent extends React.Component {
//   render() {
//     <p>I am some component</p>
//   }
// }
//
// I didn't want to deal with setting up babel for this poc.

import { get } from 'lodash'

export default function(x) {
	return get({ dog: true }, x, false)
}
