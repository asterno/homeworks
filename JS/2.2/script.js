let arr = [
    {
        name: "Rob1",
        sila: 74,
    },
    {
        name: "Rob2",
        sila: 92,
    },
    {
        name: "Rob3",
        sila: 32,
    },
    {
        name: "Rob4",
        sila: 53,
    },
    {
        name: "Rob5",
        sila: 1,
    },
]


for(let i = 0; i < arr.length; i++) {
    if(arr[i].sila < arr[i + 1].sila) {
        console.log(arr[i + 1].name)
    } else {
        console.log(arr[i].name)
    }

    if(i == 2) {
        break;
    }
}