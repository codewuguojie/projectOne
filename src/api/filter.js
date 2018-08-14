let cutoutStr = value => {
    let str = '';
    if (value.length > 15) {
        str = value.substring(0,15)+'...';
    }else{
        str = value;
    }
    return str;
}
let cutoutNum = value => {
    let str = '';
    str = value.substring(0,3)+'***'+value.substring(7,11);
    return str;
}

export { cutoutStr,cutoutNum }
