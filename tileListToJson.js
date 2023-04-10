import fs from 'fs';

let text = fs.readFileSync('src/assets/tiles_list_v1.4').toString();
let lines = text.split('\n').filter(line=> line.trim() !== '');

console.log(lines)
let frames = [];

lines.forEach(line=>{
    let parts = line.split(' ');
    let frame = {
        filename:parts[0],
        frame: {x:parts[1],y:parts[2],w:parts[3],h:parts[4]},
        rotated:false,
        trimmed:false,
        spriteSourceSize:{x:0,y:0,w:parts[3],h:parts[4]},
        sourceSize:{w:parts[3],h:parts[4]},
        pivot:{x:0.5,y:0.5}
    }
    frames.push(frame)
});
let object = {
    frames:frames,
    meta: {
        app: "http://www.codeandweb.com/texturepacker",
        version: 1.0,
        image: "megaset-3.png",
        format: "RGBA8888",
        size: {"w":1023,"h":691},
        scale: "1",
        smartupdate: "$TexturePacker:SmartUpdate:5e8f90752cfd57d3adfb39bcd3eef1b6:87d98cec6fa616080f731b87726d6a1e:b55588eba103b49b35a0a59665ed84fd$"
    }
}

let json = JSON.stringify(object);
fs.writeFileSync('tiles.json',json)
//console.log(text);