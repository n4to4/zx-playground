let count = parseInt(await $`ls -1 | wc -l`)
console.log(`Files count: ${count}`)
