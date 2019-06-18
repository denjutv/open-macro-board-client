function objFilter(obj, whiteList)
{
    return Object.keys(obj).filter( key => whiteList.includes(key) ).reduce( (res, key) => (res[key] = obj[key], res), {} );
}

module.exports = objFilter;