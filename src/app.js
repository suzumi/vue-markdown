// import {Person} from './model/Person';
import Vue from 'vue';

class Human {
    constructor(arg = { firstName: "John", lastName: "Doe" }) {
        this.fields = arg;
    }

    get(fieldName) {
        return this.fields[fieldName];
    }

    set(fieldName, value) {
        this.fields[fieldName] = value;
        return this;
    }
}

// class Demo extends Vue {
//     constructor() {
//         var properties = {
//             el: '#demo',
//             data: {
//                 bob: new Human({ firstName: "テスト", lastName: "太郎" })
//             }
//         };
//         super(properties)
//     }
// }

class Markdown extends Vue {
    constructor() {
        var properties = {
            el: '#editor',
            data: {
                input: '#hello'
            },
            filters: {
                marked: marked
            }
        };
        super(properties)
    }
}

// class HumansList extends Vue {
//   constructor (collection) {
//     this.collection = collection;
//     super({
//       el: "#humans-list", data: collection
//     })
//   }
// }

// let demo = new Demo()
let md = new Markdown()

// let humansList = new HumansList({
//   humans:[
//     new Human(),
//     new Human({firstName:"Jane", lastName:"Doe"})
//   ]
// });