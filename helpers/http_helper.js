exports.paramStringFromObject = params => {
    const searchParams = new URLSearchParams();

    for (const key of Object.keys(params)) {
        searchParams.set(key, params[key]);
    }

    return `?${searchParams.toString()}`;
};