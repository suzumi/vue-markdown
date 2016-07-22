// import {Person} from './model/Person';
import Vue from 'vue'
import mdit from "markdown-it"
import mdEmoji from "markdown-it-emoji"
import mdHighlite from "markdown-it-highlighted"
import markdownMath from "markdown-it-math"

const LaTeXStyle = {
            inlineOpen: '\\(',
            inlineClose: '\\)',
            blockOpen: '\\[',
            blockClose: '\\]'
        }
const markdown = new mdit().use(mdEmoji).use(markdownMath, LaTeXStyle)

Vue.filter('md2html', function (text) {
    return markdown.render(text);
});

class Markdown extends Vue {
    constructor() {
        var properties = {
            el: '#editor',
            data: {
                input: '## Edit here!\nYou can use emoji :smile:\n\nand you can write block math\n\\[ sum_(n=0)^k a_n = a_0 + a_i + cdots + a_k\\]\n\nSee [ascii2mathml](http://runarberg.github.io/ascii2mathml/) for reference'
            }
        };
        super(properties)
    }

    outConsole(text) {
        console.log(text)
    }
}

let md = new Markdown()
md.outConsole(markdownMath)
