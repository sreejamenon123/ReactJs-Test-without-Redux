import http from "./httpServices";

const OPTIONS = { headers: { "Content-Type": "application/json" } };

export function getServices() {
    const url = '/services';

    return http.get(url, OPTIONS);
}

export function getProviderServices() {
    const url = '/providers?include=locations%2Cschedules.location&amp;page%5Bnumber%5D=1&amp;page%5Bsize%5D=10'
    return http.get(url, OPTIONS);
}

