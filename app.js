const add = require('./add');
const read = require('./read');
const write = require('./write');
const del = require('./del');
const update = require('./update');

const text = process.argv

var note = {}

if(text[2] == 'add') {
    note = {
        id: text[3],
        title: text[4],
        body: text[5]
    }
    var oldNote = read()
    add(note, oldNote)
}
if(text[2] == 'read') {
    const present = require('./present')

    present(read())
}
if(text[2] === 'delete') {
    let id = text[3];
    let oldNote = read();
    let del = require('./del');
    del(id,oldNote);

    console.log(read());
}
if(text[2] == 'update') {
    let note = {
        id: text [3],
        title: text [4],
        body: text [5]
    }
    const oldNote = read ()
    update(note, oldNote)
    console.log(update)
    
}
