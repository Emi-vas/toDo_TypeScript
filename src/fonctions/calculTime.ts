export const calculTime = (timeA: string, timeB: string): string => {
    let res = ""
    const hoursA = parseInt(timeA.slice(0,2))
    const minA = parseInt(timeA.slice(3,5))

    const hoursB = parseInt(timeB.slice(0,2))
    const minB = parseInt(timeB.slice(3,5))

    let hoursLeft = hoursB - hoursA
    let minLeft = minB - minA

    if(minLeft < 0) {
        minLeft = (minB + 60) - minA
        hoursLeft = (hoursB - 1) - hoursA
    }
    
    res = `${hoursLeft} hours and ${minLeft} mins left`

    return res
}