// @ts-ignore
document.querySelector<HTMLDivElement>('#app')!

import('./show/test1').then(value=>{
    value.default()
})
