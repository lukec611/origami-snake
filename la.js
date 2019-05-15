
/**
 * converts a line from p1-p2 to polar coordinates for the line
 * @param {{ x: number, y: number }} p1 
 * @param {{ x: number, y: number }} p2
 * @returns {{ p1: { x: number, y: number }, width: number, angle: number }}
 */
function toPolarCoords(p1, p2) {
    const diff = { x: p2.x - p1.x, y: p2.y - p1.y };
    const m = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
    const vec = { x: diff.x / m, y: diff.y / m };
    const angle = Math.atan2(vec.y, vec.x) * 57.3;
    return {
        p1,
        width: m,
        angle: 360-angle,
    };
}

function toVector(p1, p2) {
    return { x: p2.x - p1.x, y: p2.y - p1.y };
}

function getVectorMagnitude(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

function normalizeVector(p) {
    const m = getVectorMagnitude(p);
    return { x: p.x / m, y: p.y / m };
}

function getNormalFromVector(v) {
    return { x: -v.y, y: v.x };
}
