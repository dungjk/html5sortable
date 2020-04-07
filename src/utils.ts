export function ObjectEntries(obj: any) {
    const ownProps = Object.keys(obj);
    let i = ownProps.length;
    const resArray = new Array(i); // preallocate the Array
    while (i--) { resArray[i] = [ownProps[i], obj[ownProps[i]]]; }

    return resArray;
}

export function IsArrayContains(arr: any[], item: any) {
    return (arr || []).indexOf(item) > -1;
}