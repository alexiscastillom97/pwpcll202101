(() => { "use strict";
    console.log("Webpack Working!!!"), ((o = "hola") => { alert(o) })(), async function() { console.log("Calling an async function"); const o = await new Promise((o => { setTimeout((() => { o("resolved") }), 2e3) }));
        console.log(o) }() })();