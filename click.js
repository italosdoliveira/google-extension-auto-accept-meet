const handleChange = (mutations) => {
    mutations.forEach(() => {
        var selector = 'div.VfPpkd-T0kwCb div.CE5PDe div button.VfPpkd-LgbsSe span.VfPpkd-vQzf8d';
        if(document.querySelector(selector)) {
            let button = document.querySelector(selector);
            button.click();
        } else {
            console.log('Não encontrou')
        }
    });
}

let target = document.querySelector('div.MCcOAc');
let observer = new MutationObserver(handleChange);
let config = {childList: true, attributes: true};

observer.observe(target, config);