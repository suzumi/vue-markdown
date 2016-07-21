// import {Person} from './model/Person';
import Vue from 'vue'
import mdit from "markdown-it"
import mdEmoji from "markdown-it-emoji"

const markdown = new mdit().use(mdEmoji)

Vue.filter('md2html',  function(text) {
    return markdown.render(text);
  });

class Markdown extends Vue {
    constructor() {
        var properties = {
            el: '#editor',
            data: {
                input: '## Edit here!\nYou can use emoji :smile:'
            }
        };
        super(properties)
    }
}

let md = new Markdown()
