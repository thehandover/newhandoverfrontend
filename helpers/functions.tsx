import React from 'react'

const sortAsc = (arr: any[], field: string | number) => {
    return arr.sort((a, b) => {
        if (a[field] > b[field]) { return 1; }
        if (b[field] > a[field]) { return -1; }
        return 0;
    })
}

const sortDesc = (arr: any[], field: string | number) => {
    return arr.sort((a, b) => {
        if (a[field] > b[field]) { return -1; }
        if (b[field] > a[field]) { return 1; }
        return 0;
    })
}

export {sortAsc, sortDesc}